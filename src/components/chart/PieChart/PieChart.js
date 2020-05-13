import React, { useRef, useEffect } from "react"
import Plotly from "plotly.js-basic-dist"
function PieChart({ id }) {

    const divRef = useRef(null);
    const graphDiv = <div ref={divRef}></div>

    useEffect(() => {
        Plotly.newPlot(divRef.current, data, layout, config)
    }, [divRef]);

    var data = [{
        values: [1500, 500],
        domain: { column: 0 },
        hoverinfo: "none",
        hole: .4,
        type: 'pie',
        textinfo: "none"
    }];

    var layout = {
        annotations: [
            {
                font: {
                    size: 10,
                    color: "#EAEDED",
                    fontWeight: "bold"
                },

                showarrow: false,
                text: '75%',
                x: 0.5,
                y: 0.5
            },
        ],
        paper_bgcolor: "rgba(0,0,0,0)",
        height: 80,
        width: 80,
        showlegend: false,
        grid: { rows: 1, columns: 1 },
        margin: { l: 0, r: 0, t: 0, b: 0 }
    };
    var config = {
        staticPlot: true
    }

    return graphDiv
}

export default PieChart