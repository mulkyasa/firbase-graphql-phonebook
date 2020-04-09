import React, { Component } from "react";
import UserList from "../containers/UserList";
import UserForm from "../containers/UserForm";

export default class UserBox extends Component {
  render() {
    return (
      <div className="container py-4 px-4">
        <h1 className="display-4 text-center text-white mb-0">Phonebook</h1>
        <p className="lead pb-3 text-center small text-white">
          Made by{" "}
          <a href="https://www.github.com/mulkyasa/" className="text-white">
            Yasa Mulky Al Afgani
          </a>
        </p>
        <div className="rounded-lg overflow-hidden shadow">
          <UserForm />
          <UserList />
        </div>
      </div>
    );
  }
}
