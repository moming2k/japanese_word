import React from 'react';

import styled from 'styled-components'
// import { Link, Router } from '../routes'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { Button } from 'react-bootstrap'
// import Checkbox from './Checkbox';
// import _ from 'lodash';

const grid = 10;


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

class CourseItemRow extends React.PureComponent {

    constructor(props) {
        super(props);
        const {course} = this.props;
    }

    render () {
        const {
            course
        } = this.props;
        
        return (
            <Wrapper>
                <table className="table">
                    <tbody>
                        <tr className='courseHeader' >
                            <td width="40%"> {course[1]} </td>
                            <td width="40%"> {course[2]} </td>
                        </tr>
                    </tbody>
                </table>
            </Wrapper>
        )
    }
}

export default CourseItemRow;