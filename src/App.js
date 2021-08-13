import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Luigi',
        },
        {
          name: 'Mario',
        },
        {
          name: 'Moshi',
        },
      ],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, index) => (
          <h1 key={index}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
