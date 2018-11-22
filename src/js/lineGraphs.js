class LineGraph{
    constructor(){

    }

    updateLineGraphs(FemaleData,MaleData){

        var self=this;
        var margin = {top: 30, right: 20, bottom: 30, left: 50},
        width = 400 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

        let years=[];
        FemaleData.Year.map(function(d){
         years.push(d.Year)
           }
        );
           let maxYears = d3.max(years);

        let xAxisScale=d3.scaleBand()
            .domain(years)
            // .padding(0.5)
            .range([0, 400]);

        let yAxisScale=d3.scaleLinear()
            .domain([100, 0])
            // .padding(0.5)
            .range([0, 400]);

        let xAxis = d3.axisBottom(xAxisScale);
        // xAxis.scale(xAxisScale);

        let yAxis = d3.axisLeft(yAxisScale);
        yAxis.scale(yAxisScale);

        var obesityData=[];
        for (var i=0;i<MaleData.Year.length;i++){
            var dataFormat={
                Indicator:MaleData.Year[i].Indicator,
                x:76+xAxisScale(FemaleData.Year[i].Indicator),
                y:i,
                Gender:'M'
            }
            obesityData.push(dataFormat);
        }   
        for (var i=0;i<FemaleData.Year.length;i++) {
            var dataFormat={
                Indicator:FemaleData.Year[i].Indicator,
                x:75,
                y:i,
                year:"years",
                Gender:'F'
            }
            obesityData.push(dataFormat);
        }

//////////////////////////////////////////////////////////
//          Sample Line (not tied to our data)          //
//////////////////////////////////////////////////////////

        var n = 20;

        var xScale = d3.scaleLinear()
            .domain([0, n-1]) // input
            .range([0, width]); // output

        // 6. Y scale will use the randomly generate number 
        var yScale = d3.scaleLinear()
            .domain([0, 1]) // input 
            .range([height, 0]); // output 

        var line = d3.line()
        .x(function(d, i) { return xScale(i); }) 
        .y(function(d) { return yScale(d.y); })  
        .curve(d3.curveMonotoneX) 
    

        // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
        var dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(.4)() } })

//////////////////////////////////////////////////////////
//          /Sample Line (not tied to our data)          //
//////////////////////////////////////////////////////////




        //Create the SVG Viewport
        var lineGraph1 = d3.select("#lineChart1")
            // .data(obesityData)
            // .enter()
            // .append("path")
            // .attr("d", )
            // .attr("d", valueline(data));

            lineGraph1.append("path")
            .datum(dataset) 
            .attr("class", "line")
            .attr("d", line)
            .attr("transform", "translate(" + 25 + ",0)")

        // Add the X Axis
        lineGraph1.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + 365 + ")")
            // .attr("transform", "rotate(90)")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start")
            .style("font-size", "10px")

        // Add the Y Axis
        lineGraph1.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + 25 + ",-35)")
            .call(yAxis);





//////////////////////////////////////////////////////////
//       Sample Line Graphs  on random datasets         //
//////////////////////////////////////////////////////////



        var line2 = d3.line()
        .x(function(d, i) { return xScale(i); }) 
        .y(function(d) { return yScale(d.y); })  
        .curve(d3.curveMonotoneX) 

        var dataset2 = d3.range(n).map(function(d) { return {"y": d3.randomUniform(.3)() } })


        var lineGraph2 = d3.select("#lineChart2")
        // .data(obesityData)
        // .enter()
        // .append("path")
        // .attr("d", )
        // .attr("d", valueline(data));

        lineGraph2.append("path")
        .datum(dataset2) 
        .attr("class", "line")
        .attr("d", line2)
        .attr("transform", "translate(" + 25 + ",0)")

        // Add the X Axis
        lineGraph2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + 365 + ")")
        // .attr("transform", "rotate(90)")
        .call(xAxis)
        .selectAll("text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)")
        .style("text-anchor", "start")
        .style("font-size", "10px")

        // Add the Y Axis
        lineGraph2.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + 25 + ",-35)")
        .call(yAxis);

        var line3 = d3.line()
            .x(function(d, i) { return xScale(i); }) 
            .y(function(d) { return yScale(d.y); })  
            .curve(d3.curveMonotoneX) 

        var dataset3 = d3.range(n).map(function(d) { return {"y": d3.randomUniform(.3)() } })


        var lineGraph3 = d3.select("#lineChart3")
        // .data(obesityData)
        // .enter()
        // .append("path")
        // .attr("d", )
        // .attr("d", valueline(data));

        lineGraph3.append("path")
        .datum(dataset3) 
        .attr("class", "line")
        .attr("d", line3)
        .attr("transform", "translate(" + 25 + ",0)")

        // Add the X Axis
        lineGraph3.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + 365 + ")")
        // .attr("transform", "rotate(90)")
        .call(xAxis)
        .selectAll("text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)")
        .style("text-anchor", "start")
        .style("font-size", "10px")

        // Add the Y Axis
        lineGraph3.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + 25 + ",-35)")
        .call(yAxis);

        var line4 = d3.line()
        .x(function(d, i) { return xScale(i); }) 
        .y(function(d) { return yScale(d.y); })  
        .curve(d3.curveMonotoneX) 

        var dataset4 = d3.range(n).map(function(d) { return {"y": d3.randomUniform(.3)() } })


        var lineGraph4 = d3.select("#lineChart4")
        // .data(obesityData)
        // .enter()
        // .append("path")
        // .attr("d", )
        // .attr("d", valueline(data));

        lineGraph4.append("path")
        .datum(dataset4) 
        .attr("class", "line")
        .attr("d", line4)
        .attr("transform", "translate(" + 25 + ",0)")

        // Add the X Axis
        lineGraph4.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + 365 + ")")
        // .attr("transform", "rotate(90)")
        .call(xAxis)
        .selectAll("text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)")
        .style("text-anchor", "start")
        .style("font-size", "10px")

        // Add the Y Axis
        lineGraph4.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + 25 + ",-35)")
        .call(yAxis);
    
    }

}