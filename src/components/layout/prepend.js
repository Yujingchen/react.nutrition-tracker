import React, { Component } from "react";

  export default class Prepend extends Component {
    render() {            
    return (                    
      < div className="input-group-prepend">
        <span  className="input-group-text" id="prepend">
       {this.props.name}:
      </span>
    </div>
    );
  }
}
