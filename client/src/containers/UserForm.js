import React, { Component } from "react";
import { postUser } from '../actions';
import { connect } from 'react-redux'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { Name: "", Number: "", showForm: false };
  }

  handleNameChange = (event) => {
    this.setState({ Name: event.target.value });
  }

  handleNumberChange = (event) => {
    this.setState({ Number: event.target.value });
  }

  handleSubmit = (event) => {
    this.props.addUser(
      this.state.Name,
      this.state.Number
    );
    this.setState({ Name: "", Number: "" })
    event.preventDefault();
  }

  showForm() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline mb-3">
        <div className="form-group">
          <label htmlFor="name" className="mr-sm-2">Name</label>
          <input
            type="text"
            id="name"
            name="Name"
            value={this.state.Name}
            onChange={this.handleNameChange}
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
            onChange={this.handleNumberChange}
            placeholder="Insert your number"
            className="form-control mr-sm-3"
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" value="Submit" className="btn btn-outline-dark">
          <i className="fas fa-save mr-sm-2"></i>Save
        </button>
        <button type="button" onClick={() => this.setState({ showForm: false })} value="Submit" className="btn">
          Cancel
        </button>
      </form>
    );
  }
  
  render() {
    return (
      <div>
        {!this.state.showForm &&
          <button type="button" onClick={() => this.setState({ showForm: true })} className="btn btn-success mb-3">
            <p className="mb-0"><i className="fas fa-plus mr-2"></i>Add data</p>
          </button>
        }
        {this.state.showForm ? this.showForm() : null}
      </div>
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
