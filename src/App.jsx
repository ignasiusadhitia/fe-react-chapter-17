import React, { Component } from "react";

// Stateful Component with State
class MyStatefulComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World from Stateful Component!",
      count: 0,
    };
  }

  // Event Handling: Increment count when button is clicked
  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increase Count</button>
      </div>
    );
  }
}

// Conditional Rendering
class ConditionalRenderingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <h2>Welcome, user!</h2>
        ) : (
          <h2>Please log in.</h2>
        )}
      </div>
    );
  }
}

// Looping List
const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// App Component (Main Component)
const App = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div>
      <h1>React Component Examples</h1>

      {/* Stateful Component with State */}
      <MyStatefulComponent />

      {/* Conditional Rendering */}
      <ConditionalRenderingComponent />

      {/* Looping through a list */}
      <h2>List of Items:</h2>
      <ItemList items={items} />
    </div>
  );
};

export default App;
