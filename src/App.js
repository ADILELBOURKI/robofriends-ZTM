import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import "tachyons";
import SearchBox from "./SearchBox";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  //componentdidmount
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const filteredrobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredrobots} />;
      </div>
    );
  }
}

export default App;
