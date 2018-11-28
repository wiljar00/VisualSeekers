obeseList=[];
vegConsumptionList=[];
fruitConsumptionList=[];
shareOfFemalesList=[];
shareOfMalesList=[];
seafoodConsumptionList=[];
FemaleData={};
MaleData={};

d3.json("data/world.json")
    .then(function(world) {
        console.log(world,"world");
    });

window.worldMap = new Map();
let worldMap1 = new Map();
  /* DATA LOADING */
  //Load in json data to make map
d3.csv("data/ObeseAdults.csv").then(obeseData => {
    obeseList=FormatData(obeseData);
});

d3.csv("data/vegetableConsumption.csv").then(vegConsumptiondata => {
    vegConsumptionList=FormatData(vegConsumptiondata);
});

d3.csv("data/fruitConsumption.csv").then(fruitConsumptiondata => {
   fruitConsumptionList=FormatData(fruitConsumptiondata);
});

d3.csv("data/seafoodConsumption.csv").then(seafoodConsumptiondata => {
   seafoodConsumptionList=FormatData(seafoodConsumptiondata);
});

d3.csv("data/life-expectancy.csv").then(lifeExpectancydata => {
   lifeExpectancyList=FormatData(lifeExpectancydata);
});

d3.csv("data/share_of_females.csv").then(shareOfFemales => {
   shareOfFemalesList=FormatData(shareOfFemales);
});

d3.csv("data/share_of_males.csv").then(shareOfMales => {
   shareOfMalesList=FormatData(shareOfMales);
});

d3.csv("data/population.csv").then(population => {
   populationList=FormatData(population);
});
  d3.json("data/world.json")
    .then(function(world) {
      drawMap(world);
    });


 function drawMap(world) {
     var geojson = topojson.feature(world, world.objects.countries)
     self = this;
     projection = d3.geoConicConformal().scale(150).translate([400, 350]);
     let path = d3.geoPath().projection(projection);
     let map = d3.select("#map");
     let graticule = d3.geoGraticule();
     let graticuleProjection = d3.geoPath().projection(graticule.lines());
     let view = map.selectAll("path")
         .data(geojson.features);
     view
         .enter()
         .append("path")
         .attr("d", path)
         .attr("id", function (d) {
             return d.id
         })
         .attr("stroke", "#fff")
         .attr("stroke-width", 1)
         .attr("class", "countries")
         .on('click',function (){
             d3.select("#map").selectAll("path").attr("class","countries");
             d3.select(this).attr("class", "selected");
         Onclick()});
 }

 function Onclick() {
     CountryCode = d3.select(".selected")._groups[0][0].id;
     if (CountryCode != null) {
         obeseData= obeseList.filter(m => m.Code == CountryCode);
         vegetableData = vegConsumptionList.filter(m => m.Code == CountryCode);
         fruitData = fruitConsumptionList.filter(m => m.Code == CountryCode);
         seafoodData = seafoodConsumptionList.filter(m => m.Code == CountryCode);
         lifeExpectancyData = lifeExpectancyList.filter(m => m.Code == CountryCode);
         MalePercentage = shareOfMalesList.filter(m => m.Code == CountryCode);
         FemalePercentage = shareOfFemalesList.filter(m => m.Code == CountryCode);
         FemaleData = FemalePercentage[0];
         MaleData = MalePercentage[0];
         let obesityDistribution = new obesityDistributionGraph();
         obesityDistribution.UpdateGraph(FemaleData, MaleData);
         let linGraphs=new LineGraph();
         linGraphs.updateLineGraphs(obeseData[0],vegetableData[0],fruitData[0],seafoodData[0],lifeExpectancyData[0])
     }
 }
// FetchData();
//
// setTimeout(CallObjects, 400);
//

//
function FormatData(data)
{
    var List=[];
  countryName="";
  j=0;
  for(i=0;i<data.length;i++){
    if((i==0 || data[i].Entity!=countryName)&&data[i].Code!=""&&data[i].Indicator!=""&&(data[i].Year>=1976&&data[i].Year<=2013))
    {
       var country={};
        country.Name=data[i].Entity;
        country.Code=data[i].Code;
        country.Year=[];
        countryName=data[i].Entity;
        List.push(country);
        j=j+1;
    }
    else if(data[i].Code!=""&&data[i].Indicator!=""&&(data[i].Year>=1976&&data[i].Year<=2013)){
        List[j-1].Year.push({Year:data[i].Year,Indicator:data[i].Indicator})
    }
}
  return List;
}
// async function FetchData(){
//     // console.log('this first');


