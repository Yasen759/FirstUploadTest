import React, { Component } from 'react';
import UserForm from './components/user-form/user-form';
import Users from './components/users/users';


class App extends Component {
  state = {
    users:[
      {name:"mohammed", age:22, facilty:"IT",id:1},
      {name:"abd", age:21, facilty:"IT",id:2},
      {name:"emad", age:20, facilty:"IT",id:3},
      {name:"mouaz", age:22, facilty:"IT",id:4}
    ]

  }

  addUser = (user) => {
    user.id = Math.random();
    let users = [...this.state.users, user];
    this.setState({
      users : users
    })
  }

  deleteUser = (id) =>{
    let users = this.state.users.filter(user => {
      return user.id !== id;
    })
    this.setState({
      users : users
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hola Hola La La La :</h1>
        <Users users = {this.state.users} deleteUser = {this.deleteUser} />
        <UserForm addUser = {this.addUser} />
      </React.Fragment>
    );
  }
}

export default App;
