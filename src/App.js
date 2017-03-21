import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {guesses: []};
    this.handleGuess = this.handleGuess.bind(this);
  }

  handleGuess(word) {
    var newGuessHistory = this.state.guesses.slice();
    newGuessHistory.push(word);
    this.setState({guesses: newGuessHistory});
  }

  render() {
    return (
      <div className="App">
        <BoardDisplay letters={this.props.letters}/>
        <UserInputBox handleGuess={this.handleGuess} />
        <UserGuessesList guesses={this.state.guesses} />
      </div>
    );
  }
}

class UserInputBox extends Component {
  constructor(props) {
    super(props);
    this.onGuess = this.onGuess.bind(this);
    this.state = {currentWord: ''};
  }

  onGuess(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    this.props.handleGuess(this.state.currentWord);
  } else {
    this.setState({currentWord: e.target.value})
  }
  }
  render() {
    return (
        <form>
        <input onChange={this.onGuess} type='text' value={this.state.currentWord} />
        </form>
      );
  }
}

class UserGuessesList extends Component {

  render() {
    return (
        <ul>
        {this.props.guesses.map((guess) => <li>{guess}</li>)}
        </ul>
      );
  }
}

class BoardDisplay extends Component {
  render() {
    var rows = [];
    this.props.letters.forEach(function(row) {
      rows.push(<BoardRow key={row.toString()} row={row} />);
    })
    return (
        <table>
        <tbody>
          {rows}
          </tbody>
        </table>
      )
  }
}

class BoardRow extends Component {
  render() {
  return (
      <tr>
        {this.props.row.map((letter, index) => <td key={index}>{letter}</td>)}
      </tr>
      )
  }
}
export default App;
