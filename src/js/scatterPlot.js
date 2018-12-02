class ScatterPlot{
    constructor(){
    }

    updateScatterPlot(obeseList,vegetableData,fruitConsumptionList,seafoodConsumptionList,IsComparisonOn){
    
        var self=this;
        var margin = {top: 30, right: 20, bottom: 30, left: 50},
        width = 400 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

        let years=[];
        let ObeseVegDataSet=[];
        let ObeseFruitDataSet=[];
        let ObeseSeafoodDataSet=[];
        obeseList.Year.map(function(d){
            years=[1977,1987,1997,2007]
            }
        );

        obeseList=obeseList.Year.filter(m=>m.Year%10==7);
        obeseList.map(function(d){
            var object={ObeseData:d.Indicator,Year:d.Year};
            ObeseVegDataSet.push(object);
            ObeseFruitDataSet.push(object);
            ObeseSeafoodDataSet.push(object);
           }
        );
        vegetableData=vegetableData.Year.filter(m=>m.Year%10==7);
        vegetableData.map(function(d,i){
            ObeseVegDataSet[i].VegData=d.Indicator
           });
        fruitConsumptionList=fruitConsumptionList.Year.filter(m=>m.Year%10==7);
        fruitConsumptionList.map(function(d,i){
            ObeseFruitDataSet[i].FruitData=d.Indicator
           }
        );
        seafoodConsumptionList=seafoodConsumptionList.Year.filter(m=>m.Year%10==7);
        seafoodConsumptionList.map(function(d,i){
         ObeseSeafoodDataSet[i].SeaFoodData=d.Indicator
           }
        );

        let yAxisObeseScale=d3.scaleLinear()
            .domain([50,0])
            .range([0, 200]);
        let xVegyAxisScale=d3.scaleLinear()
            .domain([0, 350])
            .range([0, 200]);
        let xFruitAxisScale=d3.scaleLinear()
            .domain([0,500])
            .range([0, 200]);
        let xSeaFoodAxisScale=d3.scaleLinear()
            .domain([0,50])
            .range([0, 200]);
        let obeseYAxis = d3.axisLeft(yAxisObeseScale);
        let vegxAxis = d3.axisBottom(xVegyAxisScale);
        let FruitxAxis = d3.axisBottom(xFruitAxisScale);
        let SeafoodxAxis=d3.axisBottom(xSeaFoodAxisScale);

        vegxAxis.scale(xVegyAxisScale);
        FruitxAxis.scale(xFruitAxisScale);
        SeafoodxAxis.scale(xSeaFoodAxisScale);

        var vegetablePlot = d3.select("#vegetablePlot");
        var fruitPlot = d3.select("#fruitPlot");
        var seaFoodPlot=d3.select("#seaFoodPlot");


            // Add the X Axis
        vegetablePlot.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(25," + 190 + ")")
            .call(vegxAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start")
            .style("font-size", "10px");
        fruitPlot.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(25," + 190 + ")")
            .call(FruitxAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start")
            .style("font-size", "10px");
        seaFoodPlot.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(25," + 190 + ")")
            .call(SeafoodxAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start")
            .style("font-size", "10px");

if(IsComparisonOn==true) {
    var vegetablePlot = vegetablePlot.append("g")
        .attr("id","VegPlotForSecondCountry");
    var fruitPlot = fruitPlot.append("g")
    .attr("id","FruitPlotForSecondCountry");
    var seaFoodPlot = seaFoodPlot.append("g")
    .attr("id","SeaFoodPlotForSecondCountry");
}
else
{
    d3.select("#VegPlotForSecondCountry").remove();
    d3.select("#FruitPlotForSecondCountry").remove();
    d3.select("#SeaFoodPlotForSecondCountry").remove();
}

        vegetablePlot.selectAll("circle")
            .data(ObeseVegDataSet)
            .enter().append("circle")
            .attr("cx", d=>xVegyAxisScale(d.VegData)+25)
            .attr("cy", d=>yAxisObeseScale(d.ObeseData)-12)
            .attr("r", 4)
            .attr("fill",IsComparisonOn?"red":"black");
        fruitPlot.selectAll("circle")
            .data(ObeseFruitDataSet)
            .enter().append("circle")
            .attr("cx", d=>xFruitAxisScale(d.FruitData)+25)
            .attr("cy", d=>yAxisObeseScale(d.ObeseData)-12)
            .attr("r", 4)
        .attr("fill",IsComparisonOn?"red":"black");
         seaFoodPlot.selectAll("circle")
            .data(ObeseSeafoodDataSet)
            .enter().append("circle")
            .attr("cx", d=>xSeaFoodAxisScale(d.SeaFoodData)+25)
            .attr("cy", d=>yAxisObeseScale(d.ObeseData)-12)
            .attr("r", 4)
        .attr("fill",IsComparisonOn?"red":"black");
         if(IsComparisonOn==false){
             vegetablePlot.selectAll("circle")
            .data(ObeseVegDataSet)
            .attr("cx", d=>xVegyAxisScale(d.VegData)+25)
            .attr("cy", d=>yAxisObeseScale(d.ObeseData)-12)
            .attr("r", 4);
        fruitPlot.selectAll("circle")
            .data(ObeseFruitDataSet)
            .attr("cx", d=>xFruitAxisScale(d.FruitData)+25)
            .attr("cy", d=>yAxisObeseScale(d.ObeseData)-12)
            .attr("r", 4);
         seaFoodPlot.selectAll("circle")
            .data(ObeseSeafoodDataSet)
            .attr("cx", d=>xSeaFoodAxisScale(d.SeaFoodData)+25)
            .attr("cy", d=>yAxisObeseScale(d.ObeseData)-12)
            .attr("r", 4);
         }


        // Add the Y Axis
        vegetablePlot.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 25 + ",-12)")
            .call(obeseYAxis);

        fruitPlot.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 25 + ",-12)")
            .call(obeseYAxis);

        seaFoodPlot.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 25 + ",-12)")
            .call(obeseYAxis);

    }
}