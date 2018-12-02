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
    UpdateGraph(FemaleData,MaleData){
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
        let yAxiselement=d3.select("#yAxis");
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
        var obesityChart=d3.select("#obesityDistributionChart");
        obesityChart.selectAll("rect")
            .data(obesityData)
            .enter()
            .append("rect")
            .attr("x",d=>d.x)
            .attr("y",m=>235+40*m.y)
            .attr("height",25)
            .attr("width",m=>xAxisScale(m.Indicator))
            .attr("class",d=>d.Gender=='F'?"female":"male")
            .on("mouseover",d=>self.GetTooltipData(d));
        obesityChart.selectAll("rect")
            .data(obesityData)
            .attr("x",d=>d.x)
            .attr("y",m=>235+40*m.y)
            .attr("height",25)
            .attr("width",m=>xAxisScale(m.Indicator))
            .attr("class",d=>d.Gender=='F'?"female":"male")
            .on("mouseover",d=>self.GetTooltipData(d));
        obesityChart.selectAll("rect")
            .data(obesityData)
            .exit()
            .remove()
    }

    GetTooltipData(d){
        this.tooltip
            .html(d.Indicator);
        this.tooltip.style("visibility", "visible");
    }
}