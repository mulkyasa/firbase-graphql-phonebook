import React, { Component } from "react";
import UserList from "../containers/UserList";
import UserForm from "../containers/UserForm";

export default class UserBox extends Component {
  render() {
    return (
      <div className="container pb-4 px-4">
        <div className="jumbotron jumbotron-fluid bg-cover mb-0">
          <div className="overlay"></div>
          <div className="container text-center">
            <h1 className="display-4">Phonebook</h1>
            <p className="lead">
              This is a simple phonebook app using ReactJS, Redux, Apollo,
              Firebase and GraphQL
            </p>
          </div>
        </div>
        <div className="card rounded-0 overflow-hidden">
          <div className="card-body">
            <UserForm />
            <UserList />
          </div>
        </div>
        <hr className="mt-5" />
        <p className="lead pb-3 small text-muted text-center">
          Made by{" "}
          <a href="https://www.github.com/mulkyasa/" className="text-muted">
            Yasa Mulky Al Afgani
          </a>
        </p>
      </div>
    );
  }
}
