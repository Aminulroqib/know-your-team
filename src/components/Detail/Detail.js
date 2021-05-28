import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import DetailHeader from '../DetailHeader/DetailHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import './Detail.css';
import facebook from '../../Icon/Facebook.png';
import twitter from '../../Icon/Twitter.png';
import youtube from '../../Icon/YouTube.png';
const Detail = () => {
    const { idTeam } = useParams();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.teams[0]))
    }, [idTeam])

    const handleClick = ()=>{
        const social = `twitter.com/${detail.strTeam}`
    }

    return (
        <div>
            <DetailHeader>
                {detail.strTeamBadge}
            </DetailHeader>
            <div className='team-card'>
                <Card className='card bg-primary'>
                    <Card.Body>
                    <Card.Img className='img-team' variant="right" src={detail.strTeamFanart1} />
                        <Card.Title><h3>{detail.strAlternate}</h3></Card.Title>
                        <Card.Text>
                            <h6><FontAwesomeIcon icon={faUserCheck} />  Founded: {detail.intFormedYear}</h6>
                            <h6><FontAwesomeIcon icon={faFlag} />  Country: {detail.strCountry}</h6>
                            <h6><FontAwesomeIcon icon={faFutbol} />  Sports Type: {detail.strSport}</h6>
                            <h6><FontAwesomeIcon icon={faMars} />  Gender: {detail.strGender} </h6>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <p className='text'> 
                {detail.strDescriptionES}
                <br/>
                {detail.strDescriptionEN} 
                </p>
                
                <p className='social'>
                     <img className='social-img' src={twitter}/>
                    <img className='social-img' src={facebook}/> <img className='social-img' src={youtube}/>
                </p>
            </div>


        </div>
    );
};

export default Detail;