import React, { useRef, useEffect } from "react"
import Plotly from "plotly.js-basic-dist"
import "./ScatterChart.scss"


function ScatterAnimated() {
    const divRef = useRef(null);
    const graphDiv = <div className="graphDiv" ref={divRef}></div>
    useEffect(() => {
        makeplot();
        // click()
        // console.log("secondtime", document.querySelector(".updatemenu-item-text"))

    })
    // console.log("firsttime", document.querySelector(".updatemenu-item-text"))
    // async function click() {
    //     const btnEle = document.querySelector(".updatemenu-item-text")
    //     console.log(btnEle)
    //     if (btnEle) {
    //         await btnEle.click()
    //     }
    // }
    function makeplot() {
        Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/2014_apple_stock.csv", function (data) { processData(data) });
    };
    function processData(allRows) {
        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }
        const frames = []
        const x = unpack(allRows, 'AAPL_x')
        const y = unpack(allRows, 'AAPL_y')
        const n = x.length - 1;

        for (var i = 0; i <= n; i++) {
            frames[i] = { data: [{ x: [], y: [] }] }
            frames[i].data[0].x = x.slice(0, i + 1);
            frames[i].data[0].y = y.slice(0, i + 1);
        }
        makePlotly(frames, n);
    }


    function makePlotly(frames, n) {
        var traces = [{
            x: frames[1].data[0].x,
            y: frames[1].data[0].y,
            fill: 'tozeroy',
            type: 'scatter',
            mode: 'lines',
        }];
        var layout = {
            font: {
                size: 14,
                color: "#7b7da0",
                fontWeight: "bold",
            },
            xaxis: {
                type: "date",
                range: [frames[n].data[0].x[0], frames[n].data[0].x[n]],
                showgrid: true,
                zeroline: true,
                mirror: 'ticks',
                gridcolor: '#7b7da0',
                gridwidth: 1,
                zerolinecolor: '#7b7da0',
            },
            yaxis: {
                range: [70, 120],
                showgrid: true,
                zeroline: true,
                mirror: 'ticks',
                gridcolor: '#7b7da0',
                gridwidth: 1,
                zerolinecolor: '#7b7da0',
            },
            paper_bgcolor: "rgba(0,0,0,0)",
            plot_bgcolor: 'rgba(0,0,0,0)',
            width: 500,
            height: 300,
            grid: { rows: 1, columns: 1 },
            margin: { l: 25, r: 0, t: 25, b: 25 },
            showLegend: true,
            updatemenus: [{
                x: 0.1,
                y: 0,
                yanchor: "top",
                xanchor: "right",
                showactive: false,
                direction: "left",
                type: "buttons",
                pad: { "t": 20, "l": 0, "b": 5 },
                buttons: [{
                    method: "animate",
                    args: [null, {
                        fromcurrent: true,
                        transition: {
                            duration: 0,
                        },
                        frame: {
                            duration: 10,
                            redraw: false
                        }
                    }],
                    label: "Play"
                }]
            }]
        }
        Plotly.newPlot(divRef.current, traces, layout).then(function () {
            Plotly.addFrames(divRef.current, frames);
        });
    };

    return graphDiv;
}

export default ScatterAnimated