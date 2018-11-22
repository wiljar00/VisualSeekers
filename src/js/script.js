FetchData();
setTimeout(CallObjects, 400);

obeseList=[];
vegConsumptionList=[];
fruitConsumptionList=[];
shareOfFemalesList=[];
shareOfMalesList=[];
FemaleData={};
MaleData={};

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


async function FetchData(){
    // console.log('this first');
d3.csv("data/ObeseAdults.csv").then(obeseData => {
    obeseList=FormatData(obeseData);
    // console.log(obeseList,"obeseList");
});

d3.csv("data/vegetableConsumption.csv").then(vegConsumptiondata => {
    vegConsumptionList=FormatData(vegConsumptiondata);
    // console.log(vegConsumptionList,"vegConsumptionList");
});

d3.csv("data/fruitConsumption.csv").then(fruitConsumptiondata => {
   fruitConsumptionList=FormatData(fruitConsumptiondata);
    // console.log(fruitConsumptionList,"fruitConsumptionList");
});

d3.csv("data/life-expectancy.csv").then(lifeExpectancydata => {
   lifeExpectancyList=FormatData(lifeExpectancydata);
    // console.log(lifeExpectancyList,"lifeExpectancyList");
});

d3.csv("data/share_of_females.csv").then(shareOfFemales => {
   var shareOfFemalesList=FormatData(shareOfFemales);
    console.log(shareOfFemalesList,"shareOfFemales");

});

d3.csv("data/share_of_males.csv").then(shareOfMales => {
   var shareOfMalesList=FormatData(shareOfMales);
    console.log(shareOfMalesList,"shareOfMales");
});

d3.csv("data/population.csv").then(population => {
   populationList=FormatData(population);
    // console.log(populationList,"populationList");
});

d3.json("data/world.json")
    .then(function(world) {
        console.log(world,"world");
    });
// callback()
 }

async function CallObjects(){
    MalePercentage=shareOfMalesList.filter(m=>m.Code==='CHN');
    MaleData=MalePercentage[0];
    FemalePercentage=shareOfFemalesList.filter(m=>m.Code==='CHN');
    FemaleData=FemalePercentage[0];
    let  obesityDistribution=new obesityDistributionGraph();
    console.log("script"+shareOfFemalesList)
    obesityDistribution.UpdateGraph(FemaleData,MaleData);

}

async function CallLineGraph(){
    let lineGraph = new lineGraph();
    lineGraph.updateLineCharts();
}

window.worldMap = new Map();
let worldMap1 = new Map();
  /* DATA LOADING */
  //Load in json data to make map
  d3.json("data/world.json")
    .then(function(world) {
      worldMap1.drawMap(world);
    });