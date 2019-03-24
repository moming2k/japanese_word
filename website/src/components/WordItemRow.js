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

class WordItemRow extends React.Component {

    constructor(props) {
        super(props);
        const {course} = this.props;
        // console.log(course)
    }

    render () {
        const {
            course
        } = this.props;
        
        let primary = ""
        if (course[0]) {
            primary = `${course[0]} (${course[1]})`
        } else {
            primary = course[1]
        }

        return (
            <Wrapper>
                <ListItem button>
                    <ListItemText primary={primary} secondary={course[3]} />
                </ListItem>
            </Wrapper>
        )
    }
}

export default withStyles(styles)(WordItemRow);