import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './component/cardl-ist';
import { SearchBox } from './component/search-box';
class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    const { users, searchField } = this.state;
    const filteredMonsters = users.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeHolder="Search Monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
