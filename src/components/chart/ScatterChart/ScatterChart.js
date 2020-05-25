import React, { useRef, useEffect } from "react"
import Plotly from "plotly.js-basic-dist"
import "./ScatterChart.scss"


function ScatterChart() {
    const divRef = useRef(null);
    const graphDiv = <div className="graphDiv" ref={divRef}></div>
    useEffect(() => {
        makeplot();
    })


    function makeplot() {
        Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/2014_apple_stock.csv", function (data) { processData(data) });
    };

    function processData(allRows) {
        var x = [], y = [], standard_deviation = [];

        for (var i = 0; i < allRows.length; i++) {
            let row = allRows[i];
            x.push(row['AAPL_x']);
            y.push(row['AAPL_y']);
        }
        makePlotly(x, y, standard_deviation);
    }


    function makePlotly(x, y, standard_deviation) {
        var traces = [{
            x: x,
            y: y
        }];
        var layout = {
            paper_bgcolor: "rgba(0,0,0,0)",
            plot_bgcolor: 'rgba(0,0,0,0)',
            width: 500,
            height: 300,
            grid: { rows: 1, columns: 1 },
            margin: { l: 25, r: 25, t: 25, b: 25 },
            showLegend: true
        }
        Plotly.newPlot(divRef.current, traces, layout);
    };

    return graphDiv;
}

export default ScatterChart