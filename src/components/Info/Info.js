import React from 'react';
import { Card, Container, Row, Col, CardDeck } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Info.css'

const Info = (props) => {
    const { idTeam, strTeam, strCountry, strTeamBadge } = props.team
    const badgeStyle = {
        height: '150px'
    }

    const history = useHistory();
    return (
        <div className="">
            <div className='card-deck'>
                <div className="card-container">
                    <Card>
                        <div className="image-container">
                            <img style={badgeStyle} src={strTeamBadge} alt="" />
                        </div>
                            <div className="card-body">
                            <h3>{strTeam}</h3>
                            <p>Sports Type: Football</p>
                            <p>
                                <Link to={`info/${idTeam}`}>
                                    <Button variant="primary">Team Details <FontAwesomeIcon icon={faArrowRight} /></Button>
                                </Link>
                            </p>
                            </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Info;