import React, { useEffect, useState } from "react";
import classname from "classnames"
import { Line } from 'rc-progress';
import Setgoals from "../../entries/setGoals";
import { format, formatDistance } from 'date-fns'
import styles from "./progress-bar.module.scss"
import { ButtonSecondary } from "../../common/Button/Button"

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
    <div className="card-body mb-3">
      {/* head start*/}
      <div className={styles["head-container"], styles["flex"]} >
        <div className={styles['head-left-container']}>
          <h3 className={"green"}>
            Nutrition Progress
          </h3>
        </div>

        <div className={styles["head-right-container"], styles["flex"]}>
          <div className={styles["head-btn-box"], styles["dropdown"]}>
            <ButtonSecondary content="Today" className={classname("fa fa-caret-down", styles["secondary-icon"], styles["dropbtn"])}></ButtonSecondary>
            <div className="dropdown-content">
              <a href="#">Yesterday</a>
              <a href="#">Week</a>
              <a href="#">Months</a>
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
          <Line percent={percent} strokeWidth="2" trailWidth="2" />
        </li>
      </ul>
    </div >
  );
}

