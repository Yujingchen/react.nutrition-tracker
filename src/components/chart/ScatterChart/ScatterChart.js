import React, { useRef, useEffect } from "react"
import Plotly from "plotly.js-basic-dist"
import "./PieChart.scss"


function ScatterChart({ colors, target, consume }) {
    const divRef = useRef(null);

    const numberRef = useRef(5);
    // console.log(numberRef.current)
    // let myRef;
    // const testDiv = <div ref={myRef}></div>
    // console.log(myRef.current)
    const graphDiv = <div className="graphDiv" ></div>
    if (colors, target, consume) {
        useEffect(() => {
            Plotly.newPlot(graphDiv, data, layout, config)
        }, [divRef]);


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

        var data = [{
            type: "scatter",
            mode: "line",
            name: "Hormone value",
        }]

        var layout = {
            annotations: [
                {
                    font: {
                        size: 13,
                        color: "#EAEDED",
                        fontWeight: "bold"
                    },
                    showarrow: false,
                    text: `${((consume / target) * 100).toFixed(0)} %`,
                    x: 0.5,
                    y: 0.5
                },
            ],
            paper_bgcolor: "rgba(0,0,0,0)",
            width: 100,
            height: 150,
            showlegend: false,
            grid: { rows: 1, columns: 1 },
            margin: { l: 0, r: 0, t: 0, b: 0 },
        };
        var config = {
            staticPlot: true
        }
        return graphDiv
    }
    return null
}

export default ScatterChart