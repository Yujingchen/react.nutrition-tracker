import React, { useRef, useEffect } from "react"
import Plotly from "plotly.js-basic-dist"
import "./PieChart.scss"

function PieChartAnimated({ colors, target, consume }) {
    const divRef = useRef(null);
    const graphDiv = <div className="graphDiv" ref={divRef}></div>
    if (colors && target && consume) {
        useEffect(() => {
            Plotly.newPlot(divRef.current, data, layout, config).then(function () {
                Plotly.animate(divRef.current, frames, {
                    transition: {
                        duration: 0
                    },
                    frame: {
                        duration: 10,
                        redraw: false
                    }
                });
            });
        }, [divRef]);

        const frames = []
        const x = unpack(allRows, 'AAPL_x')
        const y = unpack(allRows, 'AAPL_y')
        const n = x.length - 1;

        for (var i = 0; i <= n; i++) {
            frames[i] = { data: [{ x: [], y: [] }] }
            frames[i].data[0].x = x.slice(0, i + 1);
            frames[i].data[0].y = y.slice(0, i + 1);
        }

        var data = [{
            values: [consume, target - consume],
            domain: { column: 0 },
            hoverinfo: "none",
            hole: .5,
            type: 'pie',
            textinfo: "none",
            marker: {
                colors: colors
            },
        }];
        var layout = {
            annotations: [
                {
                    font: {
                        size: 12,
                        color: "#EAEDED",
                    },
                    showarrow: false,
                    text: `${((consume / target) * 100).toFixed(0)} %`,
                    x: 0.5,
                    y: 0.5,
                    cursor: "pointer",
                },
            ],
            paper_bgcolor: "rgba(0,0,0,0)",
            width: 125,
            height: 150,
            showlegend: false,
            grid: { rows: 1, columns: 1 },
            margin: { l: 10, r: 10, t: 10, b: 0 },
            autosize: true,
        };
        var config = {
            staticPlot: true
        }
        return graphDiv
    }
    return null
}

export default PieChartAnimated