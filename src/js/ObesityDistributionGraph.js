class obesityDistributionGraph{

    constructor(){
        this.worldMap=worldMap;
        this.tooltip = d3.select("body")
            .append("div")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("visibility", "hidden")
            .style("background", "#FFFFFF")
            .attr('id', 'tooltip');
    };
    UpdateGraph(FemaleData,MaleData,IsdualCountry){
        var self=this;
        console.log(FemaleData,MaleData,"UpdateGraph");
        let years=[];
        console.log("here"+FemaleData)
        FemaleData.Year.map(function(d){
                years.push(d.Year)
            }
        );
        console.log(years,'years');
        let xAxisScale=d3.scaleLinear()
            .domain([0,200])
            .range([0, 1500]);
        let yAxisScale=d3.scaleBand()
            .domain(years).padding(0.5)
            .range([0, 1500]);
        let yAxis = d3.axisLeft(yAxisScale);
        yAxis.scale(yAxisScale);
        var  obesityChart;
         let yAxiselement;
         if(IsdualCountry==true){
              obesityChart=d3.select("#obesityDistributionChart2");
              obesityChart.append("g").attr("id","yAxis2").attr("class","xAxis")
              yAxiselement=d3.select("#yAxis2");
         }
         else{
             d3.select("#obesityDistributionChart2").selectAll("*").remove()
              yAxiselement=d3.select("#yAxis");
               obesityChart=d3.select("#obesityDistributionChart");
         }
        yAxiselement.attr("transform","translate(70, 200) scale(-1,1)")
            .call(yAxis)
            .selectAll("text")
            .attr("transform","scale(-1,1) rotate(0) ")
            .attr('dx', '-0.25em')
            .attr('dy', '0.2em');
        var obesityData=[];
        for (var i=0;i<MaleData.Year.length;i++)
        {
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
                Gender:'F'
            }
            obesityData.push(dataFormat);
        }

        console.log(obesityData,'obesityData');
        // var obesityChart=d3.select("#obesityDistributionChart");
       var div = d3.select("body").append("div")
       .attr("class", "noDataTooltip")
       .style("opacity", 0);


        //Hover Selection
        function handleHover(d){
            d3.selectAll('rect')
                .on('mouseover', function() {
                var percentage = d3.select(this).attr('width');
                var gender = d3.select(this).attr('class');
                    div.transition()
                    .duration(200)
                    .style("opacity", .9);
                    div.html("Gender: " + gender + "<br/>" + "Percentage: " + percentage )
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
                })
                .on('mouseout', function(){
                    var percentage = d3.select(this).attr('width');
                    var gender = d3.select(this).attr('class');
                    d3.selectAll("." + gender)
                        .transition()
                        .delay(150)
                        // .attr('fill', IsComparisonOn?"red":"black")
                        // .attr('r', 4)
                        div.transition()
                        .duration(500)
                        .style("opacity", 0);
                })
        }

        console.log(obesityData,'obesityData');
      // var obesityChart=d3.select("#obesityDistributionChart");
        obesityChart.selectAll("rect")
            .data(obesityData)
            .enter()
            .append("rect")
            .attr("x",d=>d.x)
            .attr("y",m=>200+40*m.y)
            .attr("height",25)
            .attr("width",m=>xAxisScale(m.Indicator))
            .attr("class",d=>d.Gender=='F'?"female":"male")

        obesityChart.selectAll("rect")
            .data(obesityData)
            .attr("x",d=>d.x)
            .attr("y",m=>200+40*m.y)
            .attr("height",25)
            .attr("width",m=>xAxisScale(m.Indicator))
            .attr("class",d=>d.Gender=='F'?"female":"male")

        obesityChart.selectAll("rect")
            .data(obesityData)
            .exit()
            .remove()

        handleHover(obesityData);
    }

    GetTooltipData(d){
        this.tooltip
            .html(d.Indicator);
        this.tooltip.style("visibility", "visible");
    }
}