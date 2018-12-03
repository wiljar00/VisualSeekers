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
