// src/App.js
import React, { Component } from 'react';
import UserProfile from './UserProfile';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        fullName: 'Hassan Jama',
        role: 'Go My Code Programmer'
      },
      count: 0 // State key is 'count'
    };
    // Binding is implicitly handled if using arrow function for handler
  }

  // Arrow function ensures 'this' is correctly bound
  incrementCounter = () => {
    console.log("Button clicked! - Incrementing count");
    // FIX: Use the correct state key 'count'
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { user, count } = this.state;

    return (
      <div className="App">
        <h1>React Debugging Checkpoint</h1>
        {/* Prop 'userName' is correctly passed */}
        <UserProfile userId={user.id} userName={user.fullName} role={user.role} />

        <div style={{ marginTop: '20px' }}>
          {/* Displays the correct 'count' state */}
          <p>Profile View Count: {count}</p>
          <button onClick={this.incrementCounter}>Increment View Count</button>
        </div>
      </div>
    );
  }
}

export default App;