import React from 'react';
import {findCourse} from '../services/applicationApi'
import WordItemRow from '../components/WordItemRow'
import HomeSearchAppBar from '../components/HomeSearchAppBar'

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

class Course extends React.Component {
  constructor(props) {
    super(props);
    console.log(`props ${props}`)
    this.state = {
      courseItems: props.courseItems,
    }
  }

  async componentDidMount() {
    const {
      match: { 
        params: {courseId}
      }
    } = this.props
    const response = await findCourse({jwt: '', courseId});
    if ( response && response.status === 200) {
      console.log("API call success - Get one course detail")
      const courseItems = response.data
      this.setState({courseItems:[]})
      this.setState({courseItems})
    } else {
      console.log("API call failed - Get one course detail")
    }
  }

  render () { 
    const { courseItems } = this.state;
    
    return (
      <div className="App">
        <HomeSearchAppBar headerTitle="Course"></HomeSearchAppBar>
        <header className="App-header">
          <List component="nav">
            { courseItems && courseItems.map( item => (
                                          
              <WordItemRow 
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

export default withStyles(styles)(Course);