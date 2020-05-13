import React, { Component } from "react";
import "./button.style.css"

export function ButtonPrimary(props) {
    return (
        <button className="primary-btn" onClick={props.onClick}>
            <span className="center">
                <i className={props.icon} />
            </span>
            <span className="center">{props.content}</span>
        </button>
    )
}

export function ButtonSecondary(props) {
    return (
        <button className="secondary-btn">
            <span className="center">
                <i className={props.icon} />
            </span>
            <span className="center">{props.content}</span>
        </button>
    )
}