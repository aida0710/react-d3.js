import React, { Component } from 'react'
import * as d3 from 'd3'

class NetworkGraph extends Component {
    componentDidMount() {
        this.drawChart();
    }
    drawChart() {
        const data:number[] = [12, 5, 6, 6, 9, 10];

        const svg = d3.select("body")
            .append("svg")
            .attr("width", 700)
            .attr("height", 300);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d:number, i:number) => i * 70)
            .attr("y", (d:number, i:number) => 300 - 10 * d)
            .attr("width", 65)
            .attr("height", (d:number, i:number) => d * 10)
            .attr("fill", "green");
    }
    render() {
        return <svg></svg>
    }
}

export default NetworkGraph;
