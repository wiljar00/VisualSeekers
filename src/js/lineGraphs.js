class LineGraph{
    constructor(){

    }

    updateLineGraphs(obeseList,vegConsumptionList,fruitConsumptionList,seafoodConsumptionList,lifeExpectancyList){

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
        obeseList[0].Year.map(function(d){
         years.push(d.Year)
           }
        );
        obeseList[0].Year.map(function(d){
         ObeseDataSet.push(d.Indicator)
           }
        );
        console.log(ObeseDataSet,'ObeseDataSet');
        vegConsumptionList[0].Year.map(function(d){
         vegConsumptionDataSet.push(d.Indicator)
           }
        );
        console.log(vegConsumptionDataSet,'vegConsumptionDataSet');
        fruitConsumptionList[0].Year.map(function(d){
         fruitConsumptionDataSet.push(d.Indicator)
           }
        );
        console.log(fruitConsumptionDataSet,'fruitConsumptionDataSet');
        console.log(seafoodConsumptionList[0],'seafoodConsumptionDataSet');
        seafoodConsumptionList[0].Year.map(function(d){
         seafoodConsumptionDataSet.push(d.Indicator)
           }
        );
        console.log(seafoodConsumptionDataSet,'seafoodConsumptionDataSet');

        lifeExpectancyList[0].Year.map(function(d){
         lifeExpectancyDataSet.push(d.Indicator)
           }
        );
        console.log(lifeExpectancyDataSet,'lifeExpectancyDataSet');


           let maxYears = d3.max(years);

        let xAxisScale=d3.scaleBand()
            .domain(years)
            .range([0, 700]);

        let yAxisScale=d3.scaleLinear()
            .domain([100, 0])
            .range([0, 200]);
        let vegyAxisScale=d3.scaleLinear()
            .domain([200, 0])
            .range([0, 200]);
        let fruitAxisScale=d3.scaleLinear()
            .domain([500, 0])
            .range([0, 200]);
        let seaFoodAxisScale=d3.scaleLinear()
            .domain([50, 0])
            .range([0, 200]);
        let lifeExpectancyScale=d3.scaleLinear()
            .domain([100, 0])
            .range([0, 200]);
        let xAxis = d3.axisBottom(xAxisScale);
        let yAxis = d3.axisLeft(yAxisScale);
        let vegyAxis = d3.axisLeft(vegyAxisScale);
        let fruityAxis = d3.axisLeft(fruitAxisScale);
        let SeafoodyAxis=d3.axisLeft(seaFoodAxisScale);
        let LifeExpectancyAxis=d3.axisLeft(lifeExpectancyScale);
        yAxis.scale(yAxisScale);
        vegyAxis.scale(vegyAxisScale);
        fruityAxis.scale(fruitAxisScale);
        SeafoodyAxis.scale(seaFoodAxisScale);
        LifeExpectancyAxis.scale(lifeExpectancyScale);
        var yScale = d3.scaleLinear()
            .domain([100, 0]) // input
            .range([0,200]); // output

        var line = d3.line()
        .x(function(d) { return xAxisScale(d.Year); })
        .y(function(d) { return yScale(d.Indicator)-41; })
        .curve(d3.curveMonotoneX);

        var Vegetableline = d3.line()
        .x(function(d) { return xAxisScale(d.Year); })
        .y(function(d) { return vegyAxisScale(d.Indicator)-41; })
        .curve(d3.curveMonotoneX);

        var FruitLine = d3.line()
        .x(function(d) { return xAxisScale(d.Year); })
        .y(function(d) { return fruitAxisScale(d.Indicator)-41; })
        .curve(d3.curveMonotoneX);

        var seaFoodLine = d3.line()
        .x(function(d) { return xAxisScale(d.Year); })
        .y(function(d) { return seaFoodAxisScale(d.Indicator)-41; })
        .curve(d3.curveMonotoneX);

        var lifeExpectancyLine = d3.line()
        .x(function(d) { return xAxisScale(d.Year); })
        .y(function(d) { return lifeExpectancyScale(d.Indicator)-41; })
        .curve(d3.curveMonotoneX);

        // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
        var dataset = obeseList[0].Year;
        var vegetableDataset=vegConsumptionList[0].Year;
        var fruitDataSet=fruitConsumptionList[0].Year;
        var seaFoodDataSet=seafoodConsumptionList[0].Year;
        var lifeExpectancySet=lifeExpectancyList[0].Year;
        //Create the SVG Viewport
        var lineGraph1 = d3.select("#obesitylineChart");
        var vegLineGraph = d3.select("#vegetationLineChart");
        var fruitLineGraph=d3.select("#fruitlineChart");
        var seaFoodGraph=d3.select("#seaFoodChart");
        var lifeExpectancyGraph=d3.select("#lifeExpectancyChart");
            lineGraph1.append("path")
            .datum(dataset)
            .attr("class", "line")
            .attr("d", line)
            .attr("transform", "translate(" + 25 + ",0)");
            vegLineGraph.append("path")
            .datum(vegetableDataset)
            .attr("class", "line")
            .attr("d", Vegetableline)
            .attr("transform", "translate(" + 25 + ",0)");
            fruitLineGraph.append("path")
            .datum(fruitDataSet)
            .attr("class", "line")
            .attr("d", FruitLine)
            .attr("transform", "translate(" + 25 + ",0)");
            seaFoodGraph.append("path")
            .datum(seaFoodDataSet)
            .attr("class", "line")
            .attr("d", seaFoodLine)
            .attr("transform", "translate(" + 25 + ",0)");
            lifeExpectancyGraph.append("path")
            .datum(lifeExpectancySet)
            .attr("class", "line")
            .attr("d", lifeExpectancyLine)
            .attr("transform", "translate(" + 25 + ",0)");

        // Add the X Axis
        lineGraph1.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(12," + 162 + ")")
            // .attr("transform", "rotate(90)")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start")
            .style("font-size", "10px");
        vegLineGraph.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(12," + 162 + ")")
            // .attr("transform", "rotate(90)")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start")
            .style("font-size", "10px");
        fruitLineGraph.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(12," + 162 + ")")
            // .attr("transform", "rotate(90)")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start")
            .style("font-size", "10px");
        seaFoodGraph.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(12," + 162 + ")")
            // .attr("transform", "rotate(90)")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start")
            .style("font-size", "10px");
        lifeExpectancyGraph.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(12," + 162 + ")")
            // .attr("transform", "rotate(90)")
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
        lineGraph1.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 25 + ",-41)")
            .call(yAxis);
        vegLineGraph.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 35 + ",-41)")
            .call(vegyAxis);
        fruitLineGraph.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 35 + ",-41)")
            .call(fruityAxis);
        seaFoodGraph.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 35 + ",-41)")
            .call(SeafoodyAxis);
        lifeExpectancyGraph.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 35 + ",-41)")
            .call(LifeExpectancyAxis);
    }

}