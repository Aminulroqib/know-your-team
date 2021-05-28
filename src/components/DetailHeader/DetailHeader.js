import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './DetailHeader.css'

const DetailHeader = (props) => {
    const badge = props
    console.log(props)
    return (
        <div>
            <Jumbotron className='detail-header'>
               <img className='img' src={props.children} alt="" />
            </Jumbotron>
        </div>
    );
};

export default DetailHeader;