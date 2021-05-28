import React, { useEffect, useState } from 'react';
import { Jumbotron, Container, Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import DetailHeader from '../DetailHeader/DetailHeader';
import './Detail.css'

const Detail = () => {
        const {idTeam} = useParams();
        const [detail, setDetail] = useState([]);

        useEffect(()=>{
            const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.teams[0]))
        },[])

    return (
        <div>
            <DetailHeader>
                {detail.strTeamBadge}
            </DetailHeader>
            <h3>{detail.strAlternate}</h3>
            <h5>Founded: {detail.intFormedYear}</h5>
            <h5>Country: {detail.strCountry}</h5>
            <h5>Sports Type: {detail.strSport}</h5>
            <h5>Gender: {detail.strGender} </h5>
        </div>
    );
};

export default Detail;