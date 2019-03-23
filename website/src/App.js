import React from 'react';
import './App.css';
import {findCourses} from './services/applicationApi'
import CourseItemRow from './components/CourseItemRow'

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
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          { courseItems && courseItems.map( item => (
                                        
            <CourseItemRow 
              key= {item[0]}
              course= {item}
            />
          ))}
        </header>
      </div>
    );
  }
}

export default App;