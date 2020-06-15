import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    console.log("componentDidMount");
    const response = await fetch('http://localhost:8080/api/users');
    const body = await response.json();
    this.setState({ users: body });
  }

  render() {
    const users = ["sdfgdfg", "aaaaa"];
    // const users = this.state.users.map( d => <li key={d.firstName}>{d.firstName} {d.lastName}</li> );
    return (
      <div className="App">
       { users }
     </div>
    );
  }
}

export default App;