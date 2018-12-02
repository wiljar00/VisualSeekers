class LineGraph{
    constructor(){

    }

    updateLineGraphs(obeseList,vegetableData,fruitConsumptionList,seafoodConsumptionList,lifeExpectancyList,IsDualCountry){

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
        console.log(ObeseDataSet,'ObeseDataSet');
        vegetableData.Year.map(function(d){
         vegConsumptionDataSet.push(d.Indicator)
           }
        );
        console.log(vegConsumptionDataSet,'vegConsumptionDataSet');
        fruitConsumptionList.Year.map(function(d){
         fruitConsumptionDataSet.push(d.Indicator)
           }
        );
        console.log(fruitConsumptionDataSet,'fruitConsumptionDataSet');
        console.log(seafoodConsumptionList,'seafoodConsumptionDataSet');
        seafoodConsumptionList.Year.map(function(d){
         seafoodConsumptionDataSet.push(d.Indicator)
           }
        );
        console.log(seafoodConsumptionDataSet,'seafoodConsumptionDataSet');

        lifeExpectancyList.Year.map(function(d){
         lifeExpectancyDataSet.push(d.Indicator)
           }
        );
        console.log(lifeExpectancyDataSet,'lifeExpectancyDataSet');


        let maxYears = d3.max(years);

        let xAxisScale=d3.scaleBand()
            .domain(years)
            .range([0, 700]);

        let yAxisScale=d3.scaleLinear()
            .domain([40, 0])
            .range([0, 200]);
        let vegyAxisScale=d3.scaleLinear()
            .domain([350, 0])
            .range([0, 200]);
        let fruitAxisScale=d3.scaleLinear()
            .domain([500, 0])
            .range([0, 200]);
        let seaFoodAxisScale=d3.scaleLinear()
            .domain([50, 0])
            .range([0, 200]);
        let lifeExpectancyScale=d3.scaleLinear()
            .domain([95, 40])
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
            .x(function(d) { return xAxisScale(d.Year)+8; })
            .y(function(d) { return yAxisScale(d.Indicator)+12; })
            .curve(d3.curveMonotoneX);

        var Vegetableline = d3.line()
            .x(function(d) { return xAxisScale(d.Year)+8; })
            .y(function(d) { return vegyAxisScale(d.Indicator)+12; })
            .curve(d3.curveMonotoneX);

        var FruitLine = d3.line()
            .x(function(d) { return xAxisScale(d.Year)+8; })
            .y(function(d) { return fruitAxisScale(d.Indicator)+12; })
            .curve(d3.curveMonotoneX);

        var seaFoodLine = d3.line()
            .x(function(d) { return xAxisScale(d.Year)+8; })
            .y(function(d) { return seaFoodAxisScale(d.Indicator)+12; })
            .curve(d3.curveMonotoneX);

        var lifeExpectancyLine = d3.line()
            .x(function(d) { return xAxisScale(d.Year)+8; })
            .y(function(d) { return lifeExpectancyScale(d.Indicator)+12; })
            .curve(d3.curveMonotoneX);

        // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
        var dataset = obeseList.Year;
        var vegetableDataset=vegetableData.Year;
        var fruitDataSet=fruitConsumptionList.Year;
        var seaFoodDataSet=seafoodConsumptionList.Year;
        var lifeExpectancySet=lifeExpectancyList.Year;

        //Create the SVG Viewport
        var lineGraph1 = d3.select("#obesitylineChart");
        var vegLineGraph = d3.select("#vegetationLineChart");
        var fruitLineGraph=d3.select("#fruitlineChart");
        var seaFoodGraph=d3.select("#seaFoodChart");
        var lifeExpectancyGraph=d3.select("#lifeExpectancyChart");

        //append the line graph
        if(!IsDualCountry) {
            lineGraph1.select("#obesityCurve").remove();
            vegLineGraph.select("#VegetavbleCurve").remove();
            fruitLineGraph.select("#FruitCurve").remove();
            seaFoodGraph.select("#seaFoodCurve").remove();
            lifeExpectancyGraph.select("#LifeExpectancyCurve").remove();
        }

        function transition(path) {
            path.transition()
                .duration(2000)
                .attrTween("stroke-dasharray", drawLine);
        }
        function drawLine() {
            var l = this.getTotalLength(),
                i = d3.interpolateString("0," + l, l + "," + l);
            return function (t) { return i(t); };
        }


        //Obesity Graph
        lineGraph1.append("path")
            .datum(dataset)
            .classed("line", true)
            .attr("d", line)
            .call(transition)
            .attr("id","obesityCurve")
            .attr("transform", "translate(" + 45 + ",0)");

        
        lineGraph1.selectAll("circle")
            .data(dataset).enter()
            .append("circle")
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>yAxisScale(d.Indicator)+12)
            .attr("r", 2.5)
            .attr("fill","black")
            .attr("class",d=>d.Year);
        
        lineGraph1.selectAll("circle").data(dataset).exit().remove();
        
        lineGraph1.selectAll("circle")
            .data(dataset)
            .transition()
            .duration(750)
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>yAxisScale(d.Indicator)+12)
            .attr("r", 2.5)
            .attr("fill","black")
            .attr("class",d=>d.Year);
        

        //Vegetable Consumption Graph
        vegLineGraph.append("path")
            .datum(vegetableDataset)
            .attr("class", "line")
            .attr("d", Vegetableline)
            .call(transition)
            .attr("id","VegetavbleCurve")
            .attr("transform", "translate(" + 45 + ",0)");
        
        vegLineGraph.selectAll("circle")
            .data(vegetableDataset).enter()
            .append("circle")
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>vegyAxisScale(d.Indicator)+12)
            .attr("r", 2.5)
            .attr("fill","black")
            .attr("class",d=>d.Year);
        
        vegLineGraph.selectAll("circle").data(vegetableDataset).exit().remove();
        
        vegLineGraph.selectAll("circle")
            .data(vegetableDataset)
            .transition()
            .duration(750)
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>vegyAxisScale(d.Indicator)+12)
            .attr("r", 2.5)
            .attr("fill","black")
            .attr("class",d=>d.Year);
        

        //Fruit Consumption Graph
        fruitLineGraph.append("path")
            .datum(fruitDataSet)
            .attr("class", "line")
            .attr("d", FruitLine)
            .call(transition)
            .attr("id","FruitCurve")
            .attr("transform", "translate(" + 45 + ",0)");
        
        fruitLineGraph.selectAll("circle")
            .data(fruitDataSet).enter()
            .append("circle")
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>fruitAxisScale(d.Indicator)+12)
            .attr("r", 2.5)
            .attr("fill","black")
            .attr("class",d=>d.Year);
        
        fruitLineGraph.selectAll("circle").data(fruitDataSet).exit().remove();
        
        fruitLineGraph.selectAll("circle")
            .data(fruitDataSet)
            .transition()
            .duration(750)
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>fruitAxisScale(d.Indicator)+12)
            .attr("r", 2.5)
            .attr("fill","black")
            .attr("class",d=>d.Year);
        

        //Seafood Consumption Graph
        seaFoodGraph.append("path")
            .datum(seaFoodDataSet)
            .attr("class", "line")
            .attr("d", seaFoodLine)
            .call(transition)
            .attr("id","seaFoodCurve")
            .attr("transform", "translate(" + 45 + ",0)");
        
        seaFoodGraph.selectAll("circle")
            .data(seaFoodDataSet).enter()
            .append("circle")
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>seaFoodAxisScale(d.Indicator)+12)
            .attr("r", 2.5)
            .attr("fill","black")
            .attr("class",d=>d.Year);
        
        seaFoodGraph.selectAll("circle").data(seaFoodDataSet).exit().remove();
        
        seaFoodGraph.selectAll("circle")
            .data(seaFoodDataSet)
            .transition()
            .duration(750)
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>seaFoodAxisScale(d.Indicator)+12)
            .attr("r", 2.5)
            .attr("fill","black")
            .attr("class",d=>d.Year);
        

        //Life Expectancy Graph
        lifeExpectancyGraph.append("path")
            .datum(lifeExpectancySet)
            .attr("class", "line")
            .attr("d", lifeExpectancyLine)
            .call(transition)
            .attr("id","LifeExpectancyCurve")
            .attr("transform", "translate(" + 45 + ",0)");
        
        lifeExpectancyGraph.selectAll("circle")
            .data(lifeExpectancySet).enter()
            .append("circle")
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>lifeExpectancyScale(d.Indicator)+12)
            .attr("r", 2.5)
            .attr("fill","black")
            .attr("class",d=>d.Year);
        
        lifeExpectancyGraph.selectAll("circle").data(lifeExpectancySet).exit().remove()
        
        lifeExpectancyGraph.selectAll("circle")
            .data(lifeExpectancySet)
            .transition()
            .duration(750)
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>lifeExpectancyScale(d.Indicator)+12)
            .attr("r", 2.5)
            .attr("fill","black")
            .attr("class",d=>d.Year);
        
        
        // Add the X Axis
        lineGraph1.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(40," + 210 + ")")
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
            .attr("transform", "translate(40," + 210 + ")")// change here for x axis
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
            .attr("transform", "translate(40," + 210 + ")")
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
            .attr("transform", "translate(40," + 210 + ")")
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
            .attr("transform", "translate(40," + 210 + ")")
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
            .attr("transform", "translate(" + 50 + ",10)")
            .call(yAxis);

        vegLineGraph.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 50 + ",10)")// y axis
            .call(vegyAxis);

        fruitLineGraph.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 50 + ",10)")
            .call(fruityAxis);

        seaFoodGraph.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 50 + ",10)")
            .call(SeafoodyAxis);

        lifeExpectancyGraph.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 50 + ",10)")
            .call(LifeExpectancyAxis);
    }

}