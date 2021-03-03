import React from 'react';
// removing the const keywork => stop see the Users by compiler
const Users = ({ users, deleteUser}) => {
    // react automaticly detecte the array and asign it to props
    const userslist = users.map(user => {
        if (user.age > 20) {
            return (
                <React.Fragment key={user.id}>
                    <h1>Your so lucky</h1>
                    <div>{user.name}</div>
                    <div>{user.age}</div>
                    <div>{user.facilty}</div>
                    <button onClick={() => {deleteUser(user.id)}}> Delete </button>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <h5>Not so lucky</h5>
                    <p>*-*</p>
                </React.Fragment>
            )
        }
    });
    return (
        <React.Fragment>
            <h1>Navbar Component</h1>
            // that's how we pass values from the parent to child 
            {userslist} 
        </React.Fragment>
    )
}


export default Users;