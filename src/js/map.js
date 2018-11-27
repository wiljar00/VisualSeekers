// /** Class implementing the map view. */
// class Map {
//     /**
//      * Creates a Map Object
//      */
//     constructor() {
//         this.projection = d3.geoConicConformal().scale(150).translate([400, 350]);
//
//     }
//
//     /**
//      * Function that clears the map
//      */
//     clearMap() {
//
//         // ******* TODO: PART V*******
//         // Clear the map of any colors/markers; You can do this with inline styling or by
//         // defining a class style in styles.css
//
//         // Hint: If you followed our suggestion of using classes to style
//         // the colors and markers for hosts/teams/winners, you can use
//         // d3 selection and .classed to set these classes on and off here.
//         console.log("clear called")
//         let map=d3.select("#map");
//         let view=map.selectAll("path")
//             .attr("class","countries");
//
//     }
//
//     /**
//      * Update Map with info for a specific FIFA World Cup
//      * @param wordcupData the data for one specific world cup
//      */
//     // updateMap() {
//     //
//     //     //Clear any previous selections;
//     //     this.clearMap();
//     //     let svgMap=d3.select("#map");
//     //
//     //
//     //
//     //     let teams = document.getElementById("teams");
//     //    // let teams_code = worldcupData.teams_iso;
//     //
//     //     for(let i=0; i<teams_code.length;i++)
//     //     {
//     //         d3.select("#map")
//     //             .select("#"+teams_code[i].toString())
//     //             .attr("class","team")
//     //     }
//     //     (document.getElementById(worldcupData.host_country_code))
//     //         .setAttribute("class","host");
//     //
//     //     let winner_pos=worldcupData.win_pos;
//     //     let runner_pos=worldcupData.ru_pos;
//     //     winner_pos= this.projection(winner_pos);
//     //     runner_pos=this.projection(runner_pos);
//     //     console.log(winner_pos[0]);
//     //     console.log(winner_pos[1]);
//     //
//     //     svgMap.selectAll("circle").remove();
//     //     svgMap
//     //         .append("circle")
//     //         .attr("cx",winner_pos[0])
//     //         .attr("cy",winner_pos[1])
//     //         .attr("r", 10)
//     //         .attr("class","gold");
//     //
//     //     svgMap
//     //         .append("circle")
//     //         .attr("cx",runner_pos[0])
//     //         .attr("cy",runner_pos[1])
//     //         .attr("r", 10)
//     //         .attr("class","silver");
//     //
//     //
//     //     // ******* TODO: PART V *******
//     //
//     //     // Add a marker for the winner and runner up to the map.
//     //
//     //     // Hint: remember we have a conveniently labeled class called .winner
//     //     // as well as a .silver. These have styling attributes for the two
//     //     // markers.
//     //
//     //
//     //     // Select the host country and change it's color accordingly.
//     //
//     //     // Iterate through all participating teams and change their color as well.
//     //
//     //     // We strongly suggest using CSS classes to style the selected countries.
//     //
//     //
//     //     // Add a marker for gold/silver medalists
//     // }
//
//     /**
//      * Renders the actual map
//      * @param the json data with the shape of all countries
//      */
//     // drawMap(world) {
//     //     var geojson=topojson.feature(world,world.objects.countries)
//     //     self=this;
//     //     let path = d3.geoPath().projection(this.projection);
//     //     let map=d3.select("#map");
//     //     let graticule=d3.geoGraticule();
//     //     let graticuleProjection=d3.geoPath().projection(graticule.lines());
//     //     let view=map.selectAll("path")
//     //         .data(geojson.features);
//     //     view
//     //         .enter()
//     //         .append("path")
//     //         .attr("d", path)
//     //         .attr("id", function(d){
//     //             return d.id})
//     //         .attr("stroke", "#fff")
//     //         .attr("stroke-width", 1)
//     //         .attr("class","countries")
//     //         .on('click', function() {
//     //                  worldMap.clearMap();
//     //                 d3.select(this)
//     //                      .attr("class","selected");
//     //         });
//
//
//         // Hint: assign an id to each country path to make it easier to select afterwards
//         // we suggest you use the variable in the data element's .id field to set the id
//
//         // Make sure and give your paths the appropriate class (see the .css selectors at
//         // the top of the provided html file)
//
//     }
//
//
// }
