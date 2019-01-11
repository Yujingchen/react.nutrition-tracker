import React, { Component } from "react";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ENTRY":
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== action.payload)
      };
    case "ADD_ENTRY":
      return {
        ...state,
        entries: [action.payload, ...state.entries]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    entries: [
      {
        id: "1",
        name: "Potatoes",
        carb: "10",
        fat: "5",
        protein: "6",
        servings: "1.0",
        calories: "200"
      },
      {
        id: "2",
        name: "Chicken",
        carb: "8",
        fat: "0.7",
        protein: "20",
        servings: "1.0",
        calories: "300"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
