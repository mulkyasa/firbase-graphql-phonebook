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
      <form onSubmit={this.handleSubmit} className="bg-light">
        <div className="input-group">
          <div className="w-25 border-right">
            <input
              type="text"
              name="name"
              value={this.state.Name}
              onChange={this.handleChange}
              placeholder="Insert your name"
              className="form-control rounded-0 border-0 py-4 bg-light"
              required
            />
          </div>
          <input
            type="text"
            name="Number"
            value={this.state.Number}
            onChange={this.handleChange}
            placeholder="Insert your number"
            className="form-control rounded-0 border-0 py-4 bg-light"
            autoComplete="off"
            required
          />
          <div className="input-group-append">
            <button type="submit" value="Submit" className="btn btn-link">
              <i className="fa fa-paper-plane"></i>
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
