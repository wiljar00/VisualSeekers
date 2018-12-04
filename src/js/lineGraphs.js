class LineGraph{
    constructor(){

    }

    updateLineGraphs(obeseList,vegetableData,fruitConsumptionList,seafoodConsumptionList,lifeExpectancyList,IsComparisonOn){

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
        let IsDualCountry=IsComparisonOn;

        //Extracting values to prepare path element
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

        //taking different scales to show
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

        //Creating the axses
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
            .domain([100, 0])
            .range([0,200]);

        //Creating line for path element
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

        //Setting datasets to plot
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
        if(IsDualCountry) {

        }
        else{
            d3.select("#obesitylineChart").selectAll("circle").remove();
            d3.select("#vegetationLineChart").selectAll("circle").remove();
            d3.select("#fruitlineChart").selectAll("circle").remove();
            d3.select("#seaFoodChart").selectAll("circle").remove();
            d3.select("#lifeExpectancyChart").selectAll("circle").remove();
            d3.select("#obesitylineChart").selectAll("path").remove();
            d3.select("#vegetationLineChart").selectAll("path").remove();
            d3.select("#fruitlineChart").selectAll("path").remove();
            d3.select("#seaFoodChart").selectAll("path").remove();
            d3.select("#lifeExpectancyChart").selectAll("path").remove();
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

        //Hover Selection
        function handleHover(){
            d3.selectAll('circle')
                .on('mouseover', function() {
                    var circleclass = d3.select(this).attr('class');
                    d3.selectAll("." + circleclass)
                        .transition()
                        .delay(25)
                        .attr("fill", "red")
                        .attr("r", 10);
                })
                .on('mouseout', function(){
                    var circleclass = d3.select(this).attr('class');
                    d3.selectAll("." + circleclass)
                        .transition()
                        .delay(150)
                        .attr('fill', "black")
                        .attr('r', 4);
                })


        }


        //Obesity Graph
        lineGraph1.append("path")
            .datum(dataset)
            .classed("line", true)
            .attr("d", line)
            .call(transition)
            .attr("id","obesityCurve")
            .attr("transform", "translate(" + 45 + ",0)");


        lineGraph1.append("g").selectAll("circle")
            .data(dataset).enter()
            .append("circle")
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>yAxisScale(d.Indicator)+12)
            .attr("r", 4)
            // .attr("id","graphCircle")
            .attr("fill",IsComparisonOn?"mediumpurple":"coral")
            .attr("class", function(d){
                let year = d.Year;
                return "_" + year;
            });

        //not updating if two countries are selected instaed adding another line graph
        if(!IsDualCountry) {
            lineGraph1.selectAll("circle")
                .data(dataset)
                .transition()
                .duration(750)
                .attr("cx", d => xAxisScale(d.Year) + 50)
                .attr("cy", d => yAxisScale(d.Indicator) + 12)
                .attr("r", 4)
                // .attr("id","graphCircle")
                .attr("fill", IsComparisonOn?"mediumpurple":"coral")
                .attr("class", function (d) {
                    let year = d.Year;
                    return "_" + year;
                });
        }

        lineGraph1
            .append("text")
            .attr("x",240)
            .attr("y",20)
            .text("Yearly Percentage of Obese Adults")
            .attr("color","darkred")
            .attr("class","graphHeading");

        lineGraph1
            .append("text")
            .attr("x",-200)
            .attr("y",20)
            .text("Percentage of Population")
            .attr("transform", "rotate(270)")
            .attr("class","axisTitle");


        //Vegetable Consumption Graph
        vegLineGraph.append("path")
            .datum(vegetableDataset)
            .attr("class", "line")
            .attr("d", Vegetableline)
            .call(transition)
            .attr("id","VegetavbleCurve")
            .attr("transform", "translate(" + 45 + ",0)");

        vegLineGraph.append("g").selectAll("circle")
            .data(vegetableDataset).enter()
            .append("circle")
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>vegyAxisScale(d.Indicator)+12)
            .attr("r", 4)
            // .attr("id","graphCircle")
            .attr("fill",IsComparisonOn?"mediumpurple":"coral")
            .attr("class", function(d){
                let year = d.Year;
                return "_" + year;
            })

        if(!IsDualCountry) {
            vegLineGraph.selectAll("circle")
                .data(vegetableDataset)
                .transition()
                .duration(750)
                .attr("cx", d => xAxisScale(d.Year) + 50)
                .attr("cy", d => vegyAxisScale(d.Indicator) + 12)
                .attr("r", 4)
                // .attr("id","graphCircle")
                .attr("fill",IsComparisonOn?"mediumpurple":"coral")
                .attr("class", function (d) {
                    let year = d.Year;
                    return "_" + year;
                });
        }

        vegLineGraph
            .append("text")
            .attr("x",240)
            .attr("y",20)
            .text("Yearly Vegetable Consumption")
            .attr("class","graphHeading");

        vegLineGraph
            .append("text")
            .attr("x",-200)
            .attr("y",18)
            .text("Kilogram per Capita")
            .attr("transform", "rotate(270)")
            .attr("class","axisTitle");

        //Fruit Consumption Graph
        fruitLineGraph.append("path")
            .datum(fruitDataSet)
            .attr("class", "line")
            .attr("d", FruitLine)
            .call(transition)
            .attr("id","FruitCurve")
            .attr("transform", "translate(" + 45 + ",0)");

        fruitLineGraph.append("g").selectAll("circle")
            .data(fruitDataSet).enter()
            .append("circle")
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>fruitAxisScale(d.Indicator)+12)
            .attr("r", 4)
            //.attr("id","graphCircle")
            .attr("fill",IsComparisonOn?"mediumpurple":"coral")
            .attr("class", function(d){
                let year = d.Year;
                return "_" + year;
            })

        // fruitLineGraph.selectAll("circle").data(fruitDataSet).exit().remove();
        if(!IsDualCountry) {
            fruitLineGraph.selectAll("circle")
                .data(fruitDataSet)
                .transition()
                .duration(750)
                .attr("cx", d => xAxisScale(d.Year) + 50)
                .attr("cy", d => fruitAxisScale(d.Indicator) + 12)
                .attr("r", 4)
                // .attr("id","graphCircle")
                .attr("fill", IsComparisonOn?"mediumpurple":"coral")
                .attr("class", function (d) {
                    let year = d.Year;
                    return "_" + year;
                });
        }

        fruitLineGraph
            .append("text")
            .attr("x",240)
            .attr("y",20)
            .text("Yearly Fruit Consumption")
            .attr("class","graphHeading");

        fruitLineGraph
            .append("text")
            .attr("x",-200)
            .attr("y",18)
            .text("Kilogram per Capita")
            .attr("transform", "rotate(270)")
            .attr("class","axisTitle");

        //Seafood Consumption Graph
        seaFoodGraph.append("path")
            .datum(seaFoodDataSet)
            .attr("class", "line")
            .attr("d", seaFoodLine)
            .call(transition)
            .attr("id","seaFoodCurve")
            .attr("transform", "translate(" + 45 + ",0)");

        seaFoodGraph.append("g").selectAll("circle")
            .data(seaFoodDataSet).enter()
            .append("circle")
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>seaFoodAxisScale(d.Indicator)+12)
            .attr("r", 4)
            // .attr("id","graphCircle")
            .attr("fill",IsComparisonOn?"mediumpurple":"coral")
            .attr("class", function(d){
                let year = d.Year;
                return "_" + year;
            });

        if(!IsDualCountry) {
            seaFoodGraph.selectAll("circle")
                .data(seaFoodDataSet)
                .transition()
                .duration(750)
                .attr("cx", d => xAxisScale(d.Year) + 50)
                .attr("cy", d => seaFoodAxisScale(d.Indicator) + 12)
                .attr("r", 4)
                //.attr("id","graphCircle")
                .attr("fill", IsComparisonOn?"mediumpurple":"coral")
                .attr("class", function (d) {
                    let year = d.Year;
                    return "_" + year;
                });
        }

        seaFoodGraph
            .append("text")
            .attr("x",240)
            .attr("y",20)
            .text("Yearly Seafood Consumption")
            .attr("class","graphHeading");

        seaFoodGraph
            .append("text")
            .attr("x",-200)
            .attr("y",18)
            .text("Kilogram per Capita")
            .attr("transform", "rotate(270)")
            .attr("class","axisTitle");


        //Life Expectancy Graph
        lifeExpectancyGraph.append("path")
            .datum(lifeExpectancySet)
            .attr("class", "line")
            .attr("d", lifeExpectancyLine)
            .call(transition)
            .attr("id","LifeExpectancyCurve")
            .attr("transform", "translate(" + 45 + ",0)");

        lifeExpectancyGraph.append("g").selectAll("circle")
            .data(lifeExpectancySet).enter()
            .append("circle")
            .attr("cx", d=>xAxisScale(d.Year)+50)
            .attr("cy", d=>lifeExpectancyScale(d.Indicator)+12)
            .attr("r", 4)
            .attr("fill",IsComparisonOn?"mediumpurple":"coral")
            //.attr("id","graphCircle")
            .attr("class", function(d){
                let year = d.Year;
                return "_" + year;
            });

        if(!IsDualCountry) {
            lifeExpectancyGraph.selectAll("circle")
                .data(lifeExpectancySet)
                .transition()
                .duration(750)
                .attr("cx", d => xAxisScale(d.Year) + 50)
                .attr("cy", d => lifeExpectancyScale(d.Indicator) + 12)
                .attr("r", 4)
               // .attr("id","graphCircle")
                .attr("fill", IsComparisonOn?"mediumpurple":"coral")
                .attr("class", function (d) {
                    let year = d.Year;
                    return "_" + year;
                });
        }

        lifeExpectancyGraph
            .append("text")
            .attr("x",240)
            .attr("y",20)
            .text("Yearly Life Expectancy")
            .attr("class","graphHeading");

        lifeExpectancyGraph
            .append("text")
            .attr("x",-190)
            .attr("y",18)
            .text("Life Expectancy")
            .attr("transform", "rotate(270)")
            .attr("class","axisTitle");


        // Add the X Axis
        lineGraph1.append("g")
            .attr("class", "xAxis")
            .attr("transform", "translate(40," + 210 + ")")
            // .attr("transform", "rotate(90)")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", "-3.5em")
            .attr("transform", "rotate(270)")
            .style("text-anchor", "start")
            .style("font-size", "15px");

        lineGraph1
            .append("rect")
            .attr("width","770")
            .attr("height","290")
            .attr("x","0")
            .attr("y","-10")
            .attr("class","border");


        vegLineGraph.append("g")
            .attr("class", "xAxis")
            .attr("transform", "translate(40," + 210 + ")")// change here for x axis
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", "-5em")
            .attr("transform", "rotate(270)")
            .style("text-anchor", "start")
            .style("font-size", "10px");

        vegLineGraph
            .append("rect")
            .attr("width","770")
            .attr("height","290")
            .attr("x","0")
            .attr("y","-10")
            .attr("class","border");


        fruitLineGraph.append("g")
            .attr("class", "xAxis")
            .attr("transform", "translate(40," + 210 + ")")
            // .attr("transform", "rotate(90)")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", "-5em")
            .attr("transform", "rotate(270)")
            .style("text-anchor", "start")
            .style("font-size", "10px");

        fruitLineGraph
            .append("rect")
            .attr("width","770")
            .attr("height","290")
            .attr("x","0")
            .attr("y","-10")
            .attr("class","border");


        seaFoodGraph.append("g")
            .attr("class", "xAxis")
            .attr("transform", "translate(40," + 210 + ")")
            // .attr("transform", "rotate(90)")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", "-5em")
            .attr("transform", "rotate(270)")
            .style("text-anchor", "start")
            .style("font-size", "10px");

        seaFoodGraph
            .append("rect")
            .attr("width","770")
            .attr("height","290")
            .attr("x","0")
            .attr("y","-10")
            .attr("class","border");

        lifeExpectancyGraph.append("g")
            .attr("class", "xAxis")
            .attr("transform", "translate(40," + 210 + ")")
            // .attr("transform", "rotate(90)")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", "-5em")
            .attr("transform", "rotate(270)")
            .style("text-anchor", "start")
            .style("font-size", "10px");

        lifeExpectancyGraph
            .append("rect")
            .attr("width","770")
            .attr("height","290")
            .attr("x","0")
            .attr("y","-10")
            .attr("class","border");


        // Add the Y Axis
        lineGraph1.append("g")
            .attr("class", "yAxis")
            .attr("transform", "translate(" + 50 + ",10)")
            .call(yAxis);

        vegLineGraph.append("g")
            .attr("class", "yAxis")
            .attr("transform", "translate(" + 50 + ",10)")// y axis
            .call(vegyAxis);

        fruitLineGraph.append("g")
            .attr("class", "yAxis")
            .attr("transform", "translate(" + 50 + ",10)")
            .call(fruityAxis);

        seaFoodGraph.append("g")
            .attr("class", "yAxis")
            .attr("transform", "translate(" + 50 + ",10)")
            .call(SeafoodyAxis);

        lifeExpectancyGraph.append("g")
            .attr("class", "yAxis")
            .attr("transform", "translate(" + 50 + ",10)")
            .call(LifeExpectancyAxis);


        //Call hover function
        handleHover();
    }



}