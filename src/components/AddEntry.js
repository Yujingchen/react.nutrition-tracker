import React, { Component } from "react";
import { Consumer } from "../Context";
import InputList from "./layout/InputList";
import Prepend from "./layout/prepend";
import uuid from "uuid";
import "../App.css";

class AddEntry extends Component {
  state = {
    id: uuid(),
    name: "",
    perFat: "",
    perCarbs: "",
    perProtein: "",
    size: "",
    servings: "",
    calories: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const {
      name,
      size,
      servings,
      perFat,
      perCarbs,
      perProtein,
      id
    } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Entry name is required" } });
      return;
    }
    if (size === "") {
      this.setState({ errors: { size: "Servings size is required" } });
      return;
    }
    if (servings === "") {
      this.setState({ errors: { servings: "Servings quantity is required" } });
      return;
    }
    if (perFat === "") {
      this.setState({ errors: { perFat: "Fat value is required" } });
      return;
    }
    if (perCarbs === "") {
      this.setState({ errors: { perCarbs: "Carb value is required" } });
      return;
    }
    if (perProtein === "") {
      this.setState({ errors: { perProtein: "Protein is required" } });
      return;
    }

    const fat = perFat * servings;
    const carb = perCarbs * servings;
    const protein = perProtein * servings;
    const calories = ((protein + carb) * 4 + fat * 9).toFixed(0);
    const newEntry = {
      id,
      fat: fat,
      name,
      carb: carb,
      protein: protein,
      servings,
      calories
    };

    dispatch({ type: "ADD_ENTRY", payload: newEntry });

    this.setState({
      id: "",
      name: "",
      perFat: "",
      perCarbs: "",
      perProtein: "",
      size: "",
      servings: "",
      fat: "",
      carb: "",
      protein: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  render() {
    const {
      name,
      perFat,
      perCarbs,
      perProtein,
      size,
      servings,
      errors
    } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card mb-3">
                <div className="card-header">Add Entry</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <div className="form group">
                      <div className="input-group mb-3">
                        <InputList
                          name="name"
                          value={name}
                          change={this.onChange}
                          errors={errors.name}
                          placeholder="name"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <Prepend name="Size" />
                        <InputList
                          name="size"
                          value={size}
                          change={this.onChange}
                          errors={errors.size}
                          placeholder="size"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <Prepend name="Servings Quantity" />
                        <InputList
                          name="servings"
                          value={servings}
                          change={this.onChange}
                          errors={errors.servings}
                          unit={true}
                          placeholder="serving quantity"
                        />
                      </div>

                      <label htmlFor="gramsPerservings">
                        Grams Per Servings
                      </label>

                      <div className="input-group mb-3">
                        <Prepend name="Fat" />

                        <InputList
                          name="perFat"
                          value={perFat}
                          change={this.onChange}
                          errors={errors.perFat}
                          placeholder="fat"
                        />
                      </div>

                      <div className="input-group mb-3">
                        <Prepend name="Carb" />

                        <InputList
                          name="perCarbs"
                          value={perCarbs}
                          change={this.onChange}
                          errors={errors.perCarbs}
                          placeholder="carbs"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <Prepend name="Protein" />

                        <InputList
                          name="perProtein"
                          value={perProtein}
                          change={this.onChange}
                          errors={errors.perProtein}
                          placeholder="protein"
                        />
                      </div>
                    </div>

                    <input
                      type="submit"
                      value="Add Entry"
                      className="btn btn-block btn-light"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddEntry;
