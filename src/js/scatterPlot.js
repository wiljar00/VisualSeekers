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

        //Creating datasets to show scatterplot
        obeseList=obeseList.Year.filter(m=>m.Year%10==7);
        obeseList.map(function(d){
                var object={ObeseData:d.Indicator,Year:d.Year};
                ObeseVegDataSet.push(object);
                ObeseFruitDataSet.push(object);
                ObeseSeafoodDataSet.push(object);
            }
        );
        vegetableData=vegetableData.Year.filter(m=>m.Year%10==7);
        var j=0;
        for (var i=0;i<4;i++)
        {
            var d=vegetableData.filter(m=>m.Year==ObeseVegDataSet[i].Year);
            if(d.length!=0)
            {
               ObeseVegDataSet[i].VegData = vegetableData[j].Indicator
                j=j+1
            }
            else{
                ObeseVegDataSet[i].VegData=0
            }
        }
        fruitConsumptionList=fruitConsumptionList.Year.filter(m=>m.Year%10==7);
        j=0;
        for (var i=0;i<4;i++)
        {
            var d=fruitConsumptionList.filter(m=>m.Year==ObeseFruitDataSet[i].Year);
            if(d.length!=0)
            {
               ObeseFruitDataSet[i].FruitData = fruitConsumptionList[j].Indicator
                j=j+1
            }
            else{
                ObeseFruitDataSet[i].FruitData=0
            }
        }

        seafoodConsumptionList=seafoodConsumptionList.Year.filter(m=>m.Year%10==7);
         j=0;
         for (var i=0;i<4;i++) {
             var d = seafoodConsumptionList.filter(m => m.Year == ObeseSeafoodDataSet[i].Year);
             if (d.length != 0) {
                 ObeseSeafoodDataSet[i].SeaFoodData = seafoodConsumptionList[j].Indicator;
                 j = j + 1
             }
             else {
                 ObeseSeafoodDataSet[i].SeaFoodData = 0
             }
         }

        var div = d3.select("body").append("div")
            .attr("class", "lineTooltip")
            .style("opacity", 0);


        //Hover Selection
        function handleScatterHover(){
            d3.selectAll('circle')
                .on('mouseover', function() {
                    var circleclass = d3.select(this).attr('class');
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html("Year: " + circleclass )
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");

                    d3.selectAll("." + circleclass)
                        .transition()
                        .delay(25)
                        // .attr("fill", "red")
                        .attr("r", 10);
                })
                .on('mouseout', function(){
                    var circleclass = d3.select(this).attr('class');
                    d3.selectAll("." + circleclass)
                        .transition()
                        .delay(150)
                        // .attr('fill', IsComparisonOn?"red":"black")
                        .attr('r', 4)
                    div.transition()
                        .duration(500)
                        .style("opacity", 0);
                })
        }


        let yAxisObeseScale=d3.scaleLinear()
            .domain([50,0])
            .range([0, 200]);
        let xVegyAxisScale=d3.scaleLinear()
            .domain([0, 350])
            .range([0, 600]);
        let xFruitAxisScale=d3.scaleLinear()
            .domain([0,500])
            .range([0, 600]);
        let xSeaFoodAxisScale=d3.scaleLinear()
            .domain([0,50])
            .range([0, 600]);


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
            .attr("class", "xAxis")
            .attr("transform", "translate(25," + 190 + ")")
            .call(vegxAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", "-4em")
            .attr("transform", "rotate(270)")
            .style("text-anchor", "start")
            .style("font-size", "10px");

        //Border
        vegetablePlot
            .append("rect")
            .attr("width","750")
            .attr("height","290")
            .attr("x","-30")
            .attr("y","-30")
            .attr("class","border");

        vegetablePlot
            .append("text")
            .attr("x",200)
            .attr("y",0)
            .text("Obesity vs. Vegetable Consumption")
            .attr("class","graphHeading");

        vegetablePlot
            .append("text")
            .attr("x",-200)
            .attr("y",-10)
            .text("Percent of Obese Adults")
            .attr("transform", "rotate(270)")
            .attr("class","axisTitle");

        vegetablePlot
            .append("text")
            .attr("x",240)
            .attr("y",240)
            .text("Kilogram per Capita")
            .attr("class","axisTitle");

        fruitPlot.append("g")
            .attr("class", "xAxis")
            .attr("transform", "translate(25," + 190 + ")")
            .call(FruitxAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", "-4em")
            .attr("transform", "rotate(270)")
            .style("text-anchor", "start")
            .style("font-size", "10px");

        fruitPlot
            .append("rect")
            .attr("width","750")
            .attr("height","290")
            .attr("x","-30")
            .attr("y","-30")
            .attr("class","border");

        fruitPlot
            .append("text")
            .attr("x",200)
            .attr("y",0)
            .text("Obesity vs. Fruit Consumption")
            .attr("class","graphHeading");

        fruitPlot
            .append("text")
            .attr("x",-200)
            .attr("y",-10)
            .text("Percent of Obese Adults")
            .attr("transform", "rotate(270)")
            .attr("class","axisTitle");

        fruitPlot
            .append("text")
            .attr("x",240)
            .attr("y",240)
            .text("Kilogram per Capita")
            .attr("class","axisTitle");

        seaFoodPlot.append("g")
            .attr("class", "xAxis")
            .attr("transform", "translate(25," + 190 + ")")
            .call(SeafoodxAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 10)
            .attr("dy", ".35em")
            .attr("dx", "-4em")
            .attr("transform", "rotate(270)")
            .style("text-anchor", "start")
            .style("font-size", "10px");

        seaFoodPlot
            .append("rect")
            .attr("width","750")
            .attr("height","290")
            .attr("x","-30")
            .attr("y","-30")
            .attr("class","border");

        seaFoodPlot
            .append("text")
            .attr("x",200)
            .attr("y",0)
            .text("Obesity vs. SeaFood Consumption")
            .attr("class","graphHeading");

        seaFoodPlot
            .append("text")
            .attr("x",-200)
            .attr("y",-10)
            .text("Percent of Obese Adults")
            .attr("transform", "rotate(270)")
            .attr("class","axisTitle");

        seaFoodPlot
            .append("text")
            .attr("x",240)
            .attr("y",240)
            .text("Kilogram per Capita")
            .attr("class","axisTitle");

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
            .attr("r", d=>d.VegData==0?0:4)
            .attr("r", 4)
            .attr("fill",IsComparisonOn?"mediumpurple":"coral")
            .attr("class", function(d){
                let year = d.Year;
                return "_" + year;
            })

        fruitPlot.selectAll("circle")
            .data(ObeseFruitDataSet)
            .enter().append("circle")
            .attr("cx", d=>xFruitAxisScale(d.FruitData)+25)
            .attr("cy", d=>yAxisObeseScale(d.ObeseData)-12)
            .attr("r", 4)
            .attr("fill",IsComparisonOn?"mediumpurple":"coral")
            .attr("r", d=>d.FruitData==0?0:4)
            .attr("class", function(d){
                let year = d.Year;
                return "_" + year;
            })

        seaFoodPlot.selectAll("circle")
            .data(ObeseSeafoodDataSet)
            .enter().append("circle")
            .attr("cx", d=>xSeaFoodAxisScale(d.SeaFoodData)+25)
            .attr("cy", d=>yAxisObeseScale(d.ObeseData)-12)
            .attr("r", d=>d.SeaFoodData==0?0:4)
            .attr("fill",IsComparisonOn?"mediumpurple":"coral")
            .attr("r", 4)
            .attr("fill",IsComparisonOn?"mediumpurple":"coral")
            .attr("class", function(d){
                let year = d.Year;
                return "_" + year;
            })

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
         if(IsComparisonOn==false){
             vegetablePlot.selectAll("circle")
            .data(ObeseVegDataSet)
            .attr("cx", d=>xVegyAxisScale(d.VegData)+25)
            .attr("cy", d=>yAxisObeseScale(d.ObeseData)-12)
            .attr("r", d=>d.VegData==0?0:4);
        fruitPlot.selectAll("circle")
            .data(ObeseFruitDataSet)
            .attr("cx", d=>xFruitAxisScale(d.FruitData)+25)
            .attr("cy", d=>yAxisObeseScale(d.ObeseData)-12)
            .attr("r", d=>d.FruitData==0?0:4);
         seaFoodPlot.selectAll("circle")
            .data(ObeseSeafoodDataSet)
            .attr("cx", d=>xSeaFoodAxisScale(d.SeaFoodData)+25)
            .attr("cy", d=>yAxisObeseScale(d.ObeseData)-12)
            .attr("r", d=>d.SeaFoodData==0?0:4);
         }


        // Add the Y Axis
        vegetablePlot.append("g")
            .attr("class", "yAxis")
            .attr("transform", "translate(" + 25 + ",-12)")
            .call(obeseYAxis);

        fruitPlot.append("g")
            .attr("class", "yAxis")
            .attr("transform", "translate(" + 25 + ",-12)")
            .call(obeseYAxis);

        seaFoodPlot.append("g")
            .attr("class", "yAxis")
            .attr("transform", "translate(" + 25 + ",-12)")
            .call(obeseYAxis);

        handleScatterHover();
    }
}