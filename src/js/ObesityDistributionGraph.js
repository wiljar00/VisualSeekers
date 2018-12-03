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
        let years=[];
        FemaleData.Year.map(function(d){
                years.push(d.Year)
            }
        );
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
            .attr("class","yAxis1")
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

       var div = d3.select("body").append("div")
       .attr("class", "noDataTooltip")
       .style("opacity", 0);


        //Hover Selection
        function handleHover(d){
            d3.selectAll('rect')
                .on('mouseover', function() {
                var percentage = d3.select(this).attr('percentage');
                var gender = d3.select(this).attr('class');
                    div.transition()
                    .duration(200)
                    .style("opacity", .9);
                    div.html("Gender: " + gender + "<br/>" + "Percentage: " + percentage + "%" )
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

      // var obesityChart=d3.select("#obesityDistributionChart");
        obesityChart.selectAll("rect")
            .data(obesityData)
            .enter()
            .append("rect")
            .attr("x",d=>d.x)
            .attr("y",m=>215+40*m.y)
            .attr("height",25)
            .attr("width",m=>xAxisScale(m.Indicator))
            .attr("percentage", m=>m.Indicator)
            .attr("class",d=>d.Gender=='F'?"female":"male")

        obesityChart.selectAll("rect")
            .data(obesityData)
            .attr("x",d=>d.x)
            .attr("y",m=>215+40*m.y)
            .attr("height",25)
            .attr("width",m=>xAxisScale(m.Indicator))
            .attr("percentage", m=>m.Indicator)
            .attr("class",d=>d.Gender=='F'?"female":"male")

        obesityChart.selectAll("rect")
            .data(obesityData)
            .exit()
            .remove();

        obesityChart
            .append("rect")
            .attr("width","640")
            .attr("height","1700")
            .attr("x","-30")
            .attr("y","150")
            .attr("class","border1");

        obesityChart
            .append("text")
            .attr("x",300)
            .attr("y",-535)
            .attr("transform","rotate(90)")
            .text(IsdualCountry?"Male and Female obesity distribution for country two":"Male and Female obesity distribution for country one")
            .attr("class","graphHeading1");

        handleHover(obesityData);
    }

    GetTooltipData(d){
        this.tooltip
            .html(d.Indicator);
        this.tooltip.style("visibility", "visible");
    }
}