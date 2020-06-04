import React, { useRef, useEffect } from "react"
import Plotly from "plotly.js-basic-dist"

function HorizontalChart({ colors, complete, plan }) {

    if (colors && complete && plan) {
        const caloriesRatio = ((complete.calories / plan.calories) * 100).toFixed(0)
        const proteinRatio = ((complete.protein / plan.protein) * 100).toFixed(0)
        const fatRatio = ((complete.fat / plan.fat) * 100).toFixed(0)
        const divRef = useRef(null);
        const graphDiv = <div className="graphDiv" ref={divRef}></div>

        useEffect(() => {
            Plotly.newPlot(divRef.current, data, layout, layout)
        }, [divRef]);

        const xdata = [caloriesRatio, proteinRatio, fatRatio]
        const ylength = [0, 1, 2]
        const textList = [`${caloriesRatio}%`, `${proteinRatio}%`, `${fatRatio}%`]
        const data = [{
            type: 'bar',
            x: xdata,
            y: ['Calories', 'Fat', 'Protein'],
            orientation: 'h',
            hoverinfo: 'none',
            marker: {
                color: colors,
            },
        }];

        const layout = {
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
            margin: { l: 60, r: 20, t: 50, b: 70 },
            xaxis: {
                range: [0, 110],
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
            // showLegend: true,
        }
        xdata.map((item, index) => {
            let result = {}
            if (xdata[index] > 5) {
                result = {
                    x: xdata[index] - 5,
                    y: ylength[index],
                    text: textList[index],
                    font: {
                        family: 'Arial',
                        size: 14,
                        color: 'rgba(245,246,249,1)'
                    },
                    showarrow: false,

                };
            }
            else {
                result = {
                    x: xdata[index],
                    y: ylength[index],
                    text: textList[index],
                    font: {
                        family: 'Arial',
                        size: 14,
                        color: 'rgba(245,246,249,1)'
                    },
                    showarrow: false
                };
            }
            layout.annotations.push(result);
            return null
        })
        return graphDiv
    }
    return null
}

export default HorizontalChart