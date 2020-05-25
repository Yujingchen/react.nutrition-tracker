import React, { useRef, useEffect } from "react"
import Plotly from "plotly.js-basic-dist"

function HorizontalChart({ colors }) {
    if (colors) {
        const divRef = useRef(null);
        const graphDiv = <div className="graphDiv" ref={divRef}></div>

        useEffect(() => {
            Plotly.newPlot(divRef.current, data, layout, layout)
        }, [divRef]);
        var data = [{
            type: 'bar',
            x: [20, 14, 23],
            y: ['Calories', 'Fat', 'Protein'],
            orientation: 'h',
            marker: {
                color: colors,
                width: 1
            },
        }];

        var layout = {
            font: {
                size: 14,
                color: "#7b7da0",
                fontWeight: "bold",
            },
            paper_bgcolor: "rgba(0,0,0,0)",
            plot_bgcolor: 'rgba(0,0,0,0)',
            width: 500,
            height: 300,
            grid: { rows: 1, columns: 1 },
            margin: { l: 60, r: 0, t: 25, b: 25 },
            showLegend: true,
        }

        return graphDiv
    }
    return null
}

export default HorizontalChart