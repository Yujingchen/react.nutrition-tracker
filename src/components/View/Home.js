import React, { Component } from 'react';
// import ProgressBar from "../ProgressBar/ProgressBar"
class Home extends Component {
    render() {
        const entries = [{
            carb: 100,
            fat: 100,
            protein: 100,
            servings: 3
        }]
        const goal = {
            carb: 500,
            fat: 800,
            protein: 1000
        }
        return (
            <div>
                {/* <ProgressBar entries={entries} goal={goal}></ProgressBar> */}
            </div>
        );
    }
}

export default Home;