import React from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        japaneseItems: props.japaneseItems,
    }
    // this.loadSurveys = this.loadSurveys.bind(this);
    // this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  render () { 
    const {
      id,
      title,
      code,
      type,
      scope,
      onTaskEditClick,
      onAddNewPageClick,
      onDeleteClick,
      handlePageDeleteClick,
      onEdit,
  } = this.props;
  const {
      items,
  } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. `id`
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;