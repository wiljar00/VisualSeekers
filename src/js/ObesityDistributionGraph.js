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
    UpdateGraph(FemaleData,MaleData,dualCountry){
        var self=this;
       console.log(FemaleData,MaleData,"UpdateGraph");
       let years=[];
       console.log("here"+FemaleData)
       FemaleData.Year.map(function(d){
        years.push(d.Year)
          }
      );
        let xAxisScale=d3.scaleLinear()
    .domain([0,200])
    .range([0, 700]);
        let yAxisScale=d3.scaleBand()
    .domain(years).padding(0.5)
    .range([0, 652]);
        let yAxis = d3.axisLeft(yAxisScale);
         yAxis.scale(yAxisScale);
         let yAxiselement;
         var obesityChart;
         if(dualCountry==true){
              yAxiselement=d3.select("#yAxis2");
              obesityChart=d3.select("#obesityDistributionChart2");
         }
         else{
             d3.select("#obesityDistributionChart2").remove();
             d3.select("#yAxis2").remove();
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

        obesityChart.selectAll("rect")
            .data(obesityData)
            .enter()
            .append("rect")
            .attr("x",d=>d.x)
            .attr("y",m=>215+17*m.y)
            .attr("height",10)
            .attr("width",m=>xAxisScale(m.Indicator))
            .attr("class",d=>d.Gender=='F'?"female":"male")
            .on("mouseover",d=>self.GetTooltipData(d));
        obesityChart.selectAll("rect")
            .data(obesityData)
            .attr("x",d=>d.x)
            .attr("y",m=>215+17*m.y)
            .attr("height",10)
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