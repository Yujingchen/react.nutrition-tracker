import React, { Component } from "./node_modules/react";
import "./ListItem.style.css"

const handleListItemControl = event => {
    event.preventDefault();

    document.querySelector('.sidebar').classList.toggle('listitem--focus');
};

export function ListItem(props) {
    return (
        <li className="listitem">
            <a onClick={handleListItemControl}>{props.content}</a>
        </li>
    )
}

