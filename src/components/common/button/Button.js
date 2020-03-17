import React, { Component } from "react";
import "./button.style.css"
export function ButtonSecondary(props) {
    return (
        <button className="secondary-btn">
            <span className="icon-box">
                <i className={props.className} />
            </span>
            <span className="content-box">{props.content}</span>
        </button>
    )
}

export function ButtonPrimary(props) {
    return (
        <button className="secondary-btn">
            <span className="icon-box">
                <i className={props.icon} />
            </span>
            <span className="content-box">{props.content}</span>
        </button>
    )
}
