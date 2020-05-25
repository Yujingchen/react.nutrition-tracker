import React, { useRef, useEffect } from "react"
import Plotly from "plotly.js-basic-dist"

function HorizontalChart({ colors }) {
    if (colors) {
        const divRef = useRef(null);
        const graphDiv = <div className="graphDiv" ref={divRef}></div>

        useEffect(() => {
            Plotly.newPlot(divRef.current, data, layout, layout)
        }, [divRef]);

        var xdata = [20, 14, 23]
        var ydata = [0, 1, 2]
        var textList = [20, 14, 23]
        var data = [{
            type: 'bar',
            x: [20, 14, 23],
            y: ['Calories', 'Fat', 'Protein'],
            orientation: 'h',
            // text: ["70%", "44%", "80%"].map(String),
            hoverinfo: 'none',
            // textposition: 'auto',
            marker: {
                color: colors,
            },
        }];

        var layout = {
            annotations: [
            ],
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
            // showLegend: true,
        }

        xdata.map((item, index) => {
            var result = {
                x: xdata[index] - 1,
                y: ydata[index],
                text: textList[index],
                font: {
                    family: 'Arial',
                    size: 14,
                    color: 'rgba(245,246,249,1)'
                },
                showarrow: false
            };
            layout.annotations.push(result);
        })

        return graphDiv
    }
    return null
}

export default HorizontalChart