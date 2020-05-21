import React, { useRef, useEffect } from "react"
import Plotly from "plotly.js-basic-dist"
import "./LineChart.scss"

function LineChart({ colors }) {
    const divRef = useRef(null);
    const graphDiv = <div className="graphDiv" ref={divRef}></div>

    useEffect(() => {
        Plotly.newPlot(divRef.current, data, layout, config)
    }, [divRef]);

    var trace1 = {
        x: ["Mar 13", "Mar 14", "Mar 15", "Mar 16", "Mar 17", "Mar 18", "Mar 19", "Mar 20"],
        y: [2100, 1500, 1900, 1700, 2000, 2200, 1800],
        mode: 'markers',
        name: 'Calories'
    };

    var trace2 = {
        x: ["Mar 13", "Mar 14", "Mar 15", "Mar 16", "Mar 17", "Mar 18", "Mar 19", "Mar 20"],
        y: [2100, 1500, 1900, 1700, 2000, 2200, 1800],
        mode: 'lines',
        name: 'Calories'
    };

    var data = [trace1, trace2];

    var layout = {
        bgcolor: "#7b7da0",
        paper_bgcolor: "rgba(0,0,0,0)",
        grid: { rows: 1, columns: 1 },
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
        staticPlot: true,
        log_x: true,
        log_y: true
    }

    return graphDiv
}

export default LineChart