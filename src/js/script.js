countries={};
d3.json("data/countries.json")
    .then(function(countries) {
        console.log(countries,"countries");
        this.countries=countries;

    });
let worldMap= new Map();
d3.json("data/world.json").then(function(world) {
        console.log(world,"world");
        worldMap.drawMap(world,this.countries);
});
    //------------------------------------------------------------------
obeseList=[];
vegConsumptionList=[];
fruitConsumptionList=[];
shareOfFemalesList=[];
shareOfMalesList=[];
seafoodConsumptionList=[];
FemaleData={};
MaleData={};



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
// d3.json("data/world.json")
//     .then(function(world) {
//         drawMap(world,this.countries);
//     });



function drawMap(world,countries) {

    var geojson = topojson.feature(world, world.objects.countries);
    var mapsvg=d3.select("#map");
    self = this;
    projection = d3.geoMercator().scale(120).translate([400, 350]);
    let path = d3.geoPath().projection(projection);
    let mapSvg = d3.select("#mapSvg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 960 500")
        //class to make it responsive
        .classed("svg-content-responsive", true)
        .select("#map");
    let view = mapSvg.selectAll("path")
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
        .on('click', function () {
            d3.select("#map").selectAll("path").attr("class", "countries");
            d3.select(this).attr("class", "selected");
            Onclick()
        })
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

    function handleMouseOver(d, i) {  // Add interactivity

        let countryName=null;

        for(let j=0; j<self.countries.length; j++)
        {
            if(self.countries[j].CountryId==d.id)
            {
                countryName=self.countries[j].name;
                console.log(countryName);
            }
        }
        mapSvg.append("title")
            .attr('id',"titleid")
            .text(countryName);

    }


        function handleMouseOut(d, i) {

             d3.select("titleid").remove()

        }


        // ****** TODO: PART IV ******

    }
    let mapZoom = d3.zoom()
        .scaleExtent([1, 32])
        .on("zoom", function () {
            this.curScale = d3.event.transform;
            this.zoomed();
        }.bind(this));
    mapSvg.call(mapZoom);
    this.currentMouse = null;
    this.curScale = d3.zoomIdentity;

    this.mapContainer.select("#zoom-in")
        .on("click", function () {
            mapSvg.call(mapZoom.scaleBy, 1.2);
        }.bind(this));
    this.mapContainer.select("#zoom-out")
        .on("click", function () {
            mapSvg.call(mapZoom.scaleBy, 1 / 1.2);
        }.bind(this));
    this.mapContainer.select("#reset")
        .on("click", function () {
            this.curScale.k = 1;
            this.curScale.x = 0;
            this.curScale.y = -20;
            this.zoomed();
        }.bind(this));











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


