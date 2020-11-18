import React, { Component } from 'react';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, i) => <li key={i.toString()}>{user.username}, {user.hometown}</li>)}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux
export default Users
