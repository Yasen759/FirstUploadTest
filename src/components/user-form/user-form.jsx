import React, { Component } from 'react';

class UserForm extends Component {
    state = {
        name: null,
        age: null,
        facilty: null
    }
    handleChange = (e) => {
        this.setState(
            //{[e.target.id] : [e.target.value]} than the value will be an array
            {[e.target.id] : e.target.value}            
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
    }
    render() {
        return (
            <React.Fragment>
                <h3>Add New User : </h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"> Name : </label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age"> Age : </label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="facilty"> Facilty : </label>
                    <input type="text" id="facilty" onChange={this.handleChange} />
                    <button type="submit"> Submit </button>
                </form>
            </React.Fragment>
        );
    }
}

export default UserForm;