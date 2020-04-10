import React, { Component } from "react";
import { postUser } from '../actions';
import { connect } from 'react-redux'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", message: "" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(
      this.state.Name,
      this.state.Number
    );
    this.setState({ Name: "", Number: "" })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="button" className="btn btn-link text-dark">
          <i class="fas fa-plus"></i>
        </button>
        <button type="button" className="btn btn-link text-dark">
          <i class="fas fa-search"></i>
        </button>
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={this.state.Name}
            onChange={this.handleChange}
            placeholder="Insert your name"
            className="form-control"
            required
          />
          <input
            type="text"
            name="Number"
            value={this.state.Number}
            onChange={this.handleChange}
            placeholder="Insert your number"
            className="form-control"
            autoComplete="off"
            required
          />
          <div className="input-group-append">
            <button type="submit" value="Submit" className="btn btn-link">
              <i class="fas fa-send"></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (Name, Number) => dispatch(postUser(Name, Number))
})

export default connect(
  null,
  mapDispatchToProps
)(UserForm)
