import React, { useRef, useEffect } from "react"
import Plotly from "plotly.js-basic-dist"
import "./LineChart.scss"

function LineChart() {
    const divRef = useRef(null);
    const graphDiv = <div className="graphDiv" ref={divRef}></div>

    useEffect(() => {
        Plotly.newPlot(divRef.current, data, layout, config)
    }, [divRef]);

    var trace1 = {
        x: ["13 Mar", "14 Mar", "15 Mar", "16 Mar", "17 Mar", "18 Mar", "19 Mar", "20 Mar"],
        y: [2100, 1500, 1900, 1700, 2000, 2200, 1800],
        mode: 'markers',
        name: 'Date/calories',
        marker: {
            color: '#ffffff',
            border: "1px solid #5463c0"
        },
    };

    var trace2 = {
        x: ["13 Mar", "14 Mar", "15 Mar", "16 Mar", "17 Mar", "18 Mar", "19 Mar", "20 Mar"],
        y: [2100, 1500, 1900, 1700, 2000, 2200, 1800],
        mode: 'lines',
        name: 'Calories',
        line: {
            color: '#5463c0',
            width: 1
        }
    };

    var data = [trace1, trace2];

    var layout = {
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: 'rgba(0,0,0,0)',
        grid: { rows: 1, columns: 1 },
        hovermode: "closest",

        xaxis: {
            showgrid: true,
            zeroline: true,
            mirror: 'ticks',
            gridcolor: '#7b7da0',
            gridwidth: 1,
            zerolinecolor: '#7b7da0',
        },
        yaxis: {
            showgrid: true,
            zeroline: true,
            mirror: 'ticks',
            gridcolor: '#7b7da0',
            gridwidth: 1,
            zerolinecolor: '#7b7da0',
        },
        margin: { l: 40, r: 0, t: 0, b: 40 },
        showlegend: true,
        legend: {
            x: .89, y: 1.2, color: "#7b7da0"
        },
        font: {
            size: 14,
            color: "#7b7da0",
            fontWeight: "bold",
        },
        width: 788,
        height: 360,
        autosize: true,

    };

    var config = {
        // staticPlot: true,
        log_x: true,
        log_y: true
    }

    return graphDiv
}

export default LineChart