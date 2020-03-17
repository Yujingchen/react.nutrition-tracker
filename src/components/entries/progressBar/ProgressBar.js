import React, { useEffect, useState } from "react";
import Setgoals from "../setGoals";
import { Line } from 'rc-progress';
import "./progressBarStyle.css"
import { colors } from "../../../colors"
import { format, formatDistance } from 'date-fns'
import "../../../share.css"
import { ButtonSecondary } from "../../common/button/Button"

export default function ProgressBar() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setProgress()
  })

  const setProgress = () => {
    let newPercent = percent + 1;
    if (newPercent >= 100) {
      console.log("here")
      clearTimeout(tm);
      return;
    }
    setPercent(newPercent)
    let tm = setTimeout(() => setProgress, 10);
  }



  return (
    <div>
      <div className="card card-body mb-3">
        {/* head start*/}
        <div className="head-container flex">
          <div className="head-left-container">
            <h3 className="title-color">
              Nutrition Progress
          </h3>
          </div>
          <div className="head-right-container flex">
            <div className="head-btn-box dropdown">
              <ButtonSecondary content="Today" className="fa fa-caret-down secondary-icon dropbtn"></ButtonSecondary>
              <div class="dropdown-content">
                <a href="#">Yesterday</a>
                <a href="#"></a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="head-btn-box">
              <ButtonSecondary content="ADD" className="fas fa-plus secondary-icon"></ButtonSecondary>
            </div>
            <div className="head-btn-box ">
              <ButtonSecondary content="SET THE PLAN" className="fa fa-th secondary-icon"></ButtonSecondary>
            </div>
          </div>
        </div>
        {/* head end */}

        {/* progressBar start */}
        <ul className="list-group">
          <li>
            <label>Main Goal: Calories</label>
            <Line percent={percent} strokeWidth="2" trailWidth="2" strokeColor={colors.bgcolor} />
          </li>
        </ul>
      </div>
    </div>
  );
}

