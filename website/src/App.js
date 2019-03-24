import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Course from './pages/Course'

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseItems: props.courseItems,
    }
  }

  render () { 
    return (
      <Router>
        <div className="App">
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/course" component={Course} />
      </Router>
    );
  }
}

export default withStyles(styles)(App);