/** Class implementing the map view. */
class Map {
    /**
     * Creates a Map Object
     */
    constructor() {
        this.projection = d3.geoMercator().scale(120).translate([400, 350]);
        this.countries=[];
        this.checkBoxValue=false;
        this.obeseList=[];
        this.vegConsumptionList=[];
        this.fruitConsumptionList=[];
        this.shareOfFemalesList=[];
        this.shareOfMalesList=[];
        this.seafoodConsumptionList=[];
        this.FemaleData={};
        this.MaleData={};
        this.obeseData=[];

    }

    
    /**
     * Function that clears the map
     */

    clearMap() {

        // ******* TODO: PART V*******
        // Clear the map of any colors/markers; You can do this with inline styling or by
        // defining a class style in styles.css

        // Hint: If you followed our suggestion of using classes to style
        // the colors and markers for hosts/teams/winners, you can use
        // d3 selection and .classed to set these classes on and off here.
        let map=d3.select("#map");
        let view=map.selectAll("path")
            .attr("class","countries");

    }

    /**
     * Update Map with info for a specific FIFA World Cup
     * @param wordcupData the data for one specific world cup
     */
    updateMap() {
        this.checkBoxValue=document.getElementById("comparision").checked;

    }
    /**
     * Renders the actual map
     * @param the json data with the shape of all countries
     */

    drawMap(world,countries) {
        this.countries=countries;
        self=this;
        let selectedCountries = [];

        let div = d3.select("body").append("div")	
        .attr("class", "noDataTooltip")				
        .style("opacity", 0);

        var geojson = topojson.feature(world, world.objects.countries);
        var mapsvg=d3.select("#mapSvg");
        self = this;
        this.projection = d3.geoMercator().scale(120).translate([400, 350]);
        let path = d3.geoPath().projection(this.projection);
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
            .on('click',onclick)
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

        function onclick() {
            let CountryCode ;
            let dualCountry;
            self.checkBoxValue=document.getElementById("comparision").checked;
            if(self.checkBoxValue)
            {
                d3.select(this).attr("class", "secondSelected");
                document.getElementById("comparision").checked = false;
                document.getElementById("comparision").disabled = true;
                 CountryCode = d3.select(".secondSelected")._groups[0][0].id;
                 dualCountry=true
            }
            else
            {
                document.getElementById("comparision").disabled = false;
            self.clearMap();
            selectedCountries=[];
            d3.select(this).attr("class", "selected");
                 CountryCode = d3.select(".selected")._groups[0][0].id;
                 dualCountry=false
            }

            self.checkBoxValue=document.getElementById("comparision").checked;

            selectedCountries.push(CountryCode);
            console.log("selectedCountries "+selectedCountries);
            if (CountryCode != null) {
                self.obeseData = obeseList.filter(m => m.Code == CountryCode);
                self.vegetableData = vegConsumptionList.filter(m => m.Code == CountryCode);
                self.fruitData = fruitConsumptionList.filter(m => m.Code == CountryCode);
                self.seafoodData = seafoodConsumptionList.filter(m => m.Code == CountryCode);
                self.lifeExpectancyData = lifeExpectancyList.filter(m => m.Code == CountryCode);
                self.MalePercentage = shareOfMalesList.filter(m => m.Code == CountryCode);
                self.FemalePercentage = shareOfFemalesList.filter(m => m.Code == CountryCode);
                let FemaleData = self.FemalePercentage[0];
                let MaleData = self.MalePercentage[0];
                if(FemaleData != null && MaleData != null){

                    let obesityDistribution = new obesityDistributionGraph();
                    obesityDistribution.UpdateGraph(FemaleData, MaleData,dualCountry);

                    let lineGraph = new LineGraph();
                    lineGraph.updateLineGraphs(self.obeseData[0], self.vegetableData[0], self.fruitData[0], self.seafoodData[0], self.lifeExpectancyData[0],dualCountry);

                    let scatterPlot= new ScatterPlot();
                    scatterPlot.updateScatterPlot(self.obeseData[0], self.vegetableData[0], self.fruitData[0], self.seafoodData[0],dualCountry);

                }
                else{

                    //Show error message
                    div.transition()		
                        .duration(200)		
                        .style("opacity", .9)

                    div.html("No Data Available For This Country" )	
                        .style("left", (d3.event.pageX) +"px")		
                        .style("top", (d3.event.pageY) + "px")

                }
            }
        }
    }
}