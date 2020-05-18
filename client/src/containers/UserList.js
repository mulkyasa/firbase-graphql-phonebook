import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";
import { loadUser } from "../actions";

class UserList extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    const listItems = this.props.users.map((item, index) => (
      item.search ? (
        <UserItem key={index} id={index + 1} user={item} />
      ) : null
    ));

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
