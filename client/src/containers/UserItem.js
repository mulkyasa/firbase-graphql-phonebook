import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser, updateUser } from "../actions";

class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.user.userName,
      Name: props.user.Name,
      Number: props.user.Number,
      edit: false
    };
  }
  handleNameChange = (event) => {
    this.setState({ Name: event.target.value });
  };

  handleNumberChange = (event) => {
    this.setState({ Number: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateUser(this.state.userName, this.state.Name, this.state.Number)
  };

  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>
          {this.state.edit ? (
            <input
              type="text"
              value={this.state.Name}
              onChange={this.handleNameChange}
              className="form-control"
              placeholder="Name"
            />
          ) : (
            this.props.user.Name
          )}
        </td>
        <td>
          {this.state.edit ? (
            <input
              type="text"
              value={this.state.Number}
              onChange={this.handleNumberChange}
              className="form-control"
              placeholder="Number"
            />
          ) : (
            this.props.user.Number
          )}
        </td>
        <td className="text-right">
          {this.state.edit ? (
            <div>
              <button onClick={this.handleSubmit} className="btn text-dark border-right">
                <small className="fa fa-save mx-sm-2"></small>
              </button>
              <button onClick={() => this.setState({edit: false})} className="btn text-danger">
                <small className="fas fa-times mx-sm-2"></small>
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => this.setState({edit: true})} className="btn text-dark border-right">
                <small className="fa fa-edit mx-sm-2"></small>
              </button>
              <button onClick={this.props.deleteUser} className="btn text-dark">
                <small className="fas fa-trash-alt mx-sm-2"></small>
              </button>
            </div>
          )}
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteUser: () => dispatch(deleteUser(ownProps.userName)),
  updateUser: (userName, Name, Number) => dispatch(updateUser(userName, Name, Number))
});

export default connect(null, mapDispatchToProps)(UserItem);
