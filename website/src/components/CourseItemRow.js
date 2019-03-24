import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Wrapper = styled.div`
    .formOdd {
        background: #F0f0f0;
    }
    .formEven {
        background: #f9f9f9;
    }
    .courseHeader > td {
        padding-top: 50px;
        vertical-align: center;
    }
`

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

class CourseItemRow extends React.Component {

    constructor(props) {
        super(props);
        const {course} = this.props;
        console.log(course)
    }

    render () {
        const {
            course
        } = this.props;
        
        return (
            <Wrapper>
                <ListItem 
                    {...{ to: `/course/${course[0]}`}}
                    component={Link}
                    button={true}>
                    <ListItemText primary={course[1]} secondary={course[2]} />
                </ListItem>
            </Wrapper>
        )
    }
}

export default withStyles(styles)(CourseItemRow);