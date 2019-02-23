import React, { Component } from "react";
import Modal from "react-responsive-modal";
import classnames from "classnames";
class Setgoal extends Component {
  state = {
    open: false,
    goal: "",
    errors: {}
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { open, goal, errors } = this.state;
    return (
      <div>
        <button className="btn btn-danger" onClick={this.onOpenModal}>
          Open modal
        </button>
        <Modal open={open} onClose={this.onCloseModal} little>
          <form>
            <input
              type="text"
              name="size"
              value={goal}
              onChange={this.onChange}
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.goal
              })}
            />
          </form>
        </Modal>
      </div>
    );
  }
}

export default Setgoal;
