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
      <form onSubmit={this.handleSubmit} className="form-inline mb-3">
        <div className="form-group">
          <label htmlFor="name" className="mr-sm-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.Name}
            onChange={this.handleChange}
            placeholder="Insert your name"
            className="form-control mr-sm-3"
            autoComplete="off"
            required
          />
          <label htmlFor="number" className="mr-sm-2">Number</label>
          <input
            type="text"
            id="number"
            name="Number"
            value={this.state.Number}
            onChange={this.handleChange}
            placeholder="Insert your number"
            className="form-control mr-sm-3"
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" value="Submit" className="btn btn-outline-dark">
          <i className="fas fa-save mr-sm-2"></i>Save
        </button>
        <button type="submit" value="Submit" className="btn">
          Cancel
        </button>
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
