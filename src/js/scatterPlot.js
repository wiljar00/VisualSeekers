class ScatterPlot{
    constructor(){
    }

    // let scatterPlot  = new ScatterPlot();
    // scatterPlot.updateScatterPlot(obeseData[0], vegetableData[0], fruitData[0], seafoodData[0], lifeExpectancyData[0])

    updateScatterPlot(obeseList,vegetableData,fruitConsumptionList,seafoodConsumptionList,lifeExpectancyList){
    
        var self=this;
        var margin = {top: 30, right: 20, bottom: 30, left: 50},
        width = 400 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

        let years=[];
        let ObeseDataSet=[];
        let vegConsumptionDataSet=[];
        let fruitConsumptionDataSet=[];
        let seafoodConsumptionDataSet=[];
        let lifeExpectancyDataSet=[];
        obeseList.Year.map(function(d){
            years.push(d.Year)
            }
        );
        obeseList.Year.map(function(d){
         ObeseDataSet.push(d.Indicator)
           }
        );
        vegetableData.Year.map(function(d){
         vegConsumptionDataSet.push(d.Indicator)
           }
        );
        fruitConsumptionList.Year.map(function(d){
         fruitConsumptionDataSet.push(d.Indicator)
           }
        );
        seafoodConsumptionList.Year.map(function(d){
         seafoodConsumptionDataSet.push(d.Indicator)
           }
        );
        lifeExpectancyList.Year.map(function(d){
         lifeExpectancyDataSet.push(d.Indicator)
           }
        );

        let xAxisObeseScale=d3.scaleBand()
            .domain(ObeseDataSet)
            .range([10, 700]);
        
        let maxVeg = d3.max(vegConsumptionDataSet);

        let yVegyAxisScale=d3.scaleBand()
            .domain([maxVeg, 0])
            .range([0, 200]);

        let yFruitAxisScale=d3.scaleLinear()
            .domain(fruitConsumptionDataSet)
            .range([0, 200]);

        let ySeaFoodAxisScale=d3.scaleLinear()
            .domain(seafoodConsumptionDataSet)
            .range([0, 200]);

        let yLifeExpectancyScale=d3.scaleLinear()
            .domain(lifeExpectancyDataSet)
            .range([0, 200]);

        let xAxis = d3.axisBottom(xAxisObeseScale);
        let vegyAxis = d3.axisLeft(yVegyAxisScale);
        let fruityAxis = d3.axisLeft(yFruitAxisScale);
        let SeafoodyAxis=d3.axisLeft(ySeaFoodAxisScale);
        let LifeExpectancyAxis=d3.axisLeft(yLifeExpectancyScale);
        vegyAxis.scale(yVegyAxisScale);
        fruityAxis.scale(yFruitAxisScale);
        SeafoodyAxis.scale(ySeaFoodAxisScale);
        LifeExpectancyAxis.scale(yLifeExpectancyScale);

        var yScale = d3.scaleLinear()
            .domain([100, 0]) // input
            .range([0,200]); // output

        var vegetablePlot = d3.select("#vegetablePlot");
        var fruitPlot = d3.select("#fruitPlot");
        var seaFoodPlot=d3.select("#seaFoodPlot");
        var lifeExpectancyPlot=d3.select("#lifeExpectancyPlot");

        vegetablePlot.select("vegetablePlot").remove();
        fruitPlot.select("fruitPlot").remove();
        seaFoodPlot.select("seaFoodPlot").remove();
        lifeExpectancyPlot.select("lifeExpectancyPlot").remove();

            // Add the X Axis
        vegetablePlot.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(12," + 162 + ")")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start")
            .style("font-size", "10px");


////////////////////////////////////////////////////////////////////////////
//              Needs correct datapoints                                  //
////////////////////////////////////////////////////////////////////////////


        console.log(vegConsumptionDataSet, "VegetableConsumptionDataset");
        console.log(ObeseDataSet, "ObeseDataSet");
        var g = vegetablePlot.append("g"); 
    
        g.selectAll("scatter-dots")
            .data(ObeseDataSet)
            .enter().append("circle")
            .attr("cx", function(d,i) { return xAxisObeseScale(d[i]); })
            .data(vegConsumptionDataSet)
            .attr("cy", function(d,i) { return yVegyAxisScale(d[i]); })
            .attr("r", 5);

        // g.select("trendLine")
        //     .data()

////////////////////////////////////////////////////////////////////////////

        fruitPlot.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(12," + 162 + ")")
            .call(xAxis)
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
            .attr("transform", "translate(12," + 162 + ")")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start")
            .style("font-size", "10px");

        lifeExpectancyPlot.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(12," + 162 + ")")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start")
            .style("font-size", "10px");

        // Add the Y Axis
        vegetablePlot.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 25 + ",-41)")
            .call(vegyAxis);

        fruitPlot.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 35 + ",-41)")
            .call(fruityAxis);

        seaFoodPlot.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 35 + ",-41)")
            .call(SeafoodyAxis);

        lifeExpectancyPlot.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 35 + ",-41)")
            .call(LifeExpectancyAxis);

    }
}