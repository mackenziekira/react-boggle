import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardDisplay letters={this.props.letters}/>
      </div>
    );
  }
}

class BoardDisplay extends Component {
  render() {
    var rows = [];
    this.props.letters.forEach(function(row) {
      rows.push(<BoardRow row={row} />);
    })
    return (
        <table>
          {rows}
        </table>
      )
  }
}

class BoardRow extends Component {
  render() {
  return (
      <tr>
        {this.props.row.map((letter) => <td>{letter}</td>)}
      </tr>
      )
  }
}
export default App;
