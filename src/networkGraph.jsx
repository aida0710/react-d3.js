import React, {useRef} from 'react';
import * as d3 from 'd3';

const margin = {
    top: 20,
    right: 20,
    bottom: 50,
    left: 70,
};

const svgSize = {
    width: 800,
    height: 800,
};

const size = {
    width: svgSize.width - margin.left - margin.right,
    height: svgSize.height - margin.top - margin.bottom,
};

function NetworkGraph() {
    const ref = useRef(null);

    React.useEffect(() => {
            const svg = d3.select(ref.current)
                .append("svg")
                .attr("width", size.width)
                .attr("height", size.height)
                .append("g")
                .attr("transform",
                    `translate(${margin.left}, ${margin.top})`);

            d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_network.json").then(function (data) {

                // Initialize the links
                // @ts-ignore
                const link = svg
                    .selectAll("line")
                    .data(data.links)
                    .join("line")
                    .style("stroke", "#aaa")

                // Initialize the nodes
                // @ts-ignore
                const node = svg
                    .selectAll("circle")
                    .data(data.nodes)
                    .join("circle")
                    .attr("r", 20)
                    .style("fill", "#69b3a2")

                // Let's list the force we wanna apply on the network
                const simulation = d3.forceSimulation(data.nodes)                 // Force algorithm is applied to data.nodes
                    .force("link", d3.forceLink()                               // This force provides links between nodes
                        .id(function (d) {
                            return d.id;
                        })                     // This provide  the id of a node
                        .links(data.links)                                    // and this the list of links
                    )
                    .force("charge", d3.forceManyBody().strength(-400))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
                    .force("center", d3.forceCenter(size.width / 2, size.height / 2))     // This force attracts nodes to the center of the svg area
                    .on("end", ticked);

                // This function is run at each iteration of the force algorithm, updating the nodes position.
                function ticked() {
                    link
                        .attr("x1", function (d) {
                            return d.source.x;
                        })
                        .attr("y1", function (d) {
                            return d.source.y;
                        })
                        .attr("x2", function (d) {
                            return d.target.x;
                        })
                        .attr("y2", function (d) {
                            return d.target.y;
                        });

                    node
                        .attr("cx", function (d) {
                            return d.x + 6;
                        })
                        .attr("cy", function (d) {
                            return d.y - 6;
                        });
                }
            });


            return (
                <>
                    <svg {...svgSize}>
                        <g ref={ref}/>
                    </svg>
                </>
            );
        },
        []);
}

export default NetworkGraph;