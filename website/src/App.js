import React from 'react';
import './App.css';
import {findCourses} from './services/applicationApi'
import CourseItemRow from './components/CourseItemRow'

import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';

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

  async componentDidMount() {
    const response = await findCourses({jwt: ''});
    if ( response && response.status === 200) {
      console.log("API call success - findCourses")
      const courseItems = response.data
      this.setState({courseItems:[]})
      this.setState({courseItems})
    } else {
      console.log("API call failed - findCourses")
    }
  }

  render () { 
    const { courseItems } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <List component="nav">
            { courseItems && courseItems.map( item => (
                                          
              <CourseItemRow 
                key= {item[0]}
                course= {item}
              />
            ))}

          </List>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(App);