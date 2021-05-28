import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Info from '../Info/Info';
import './Home.css'
const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))

    },[])

    return (
        <div>
            <Header></Header>
            <div className="bg-dark">
            {
                teams.map(team => <Info team={team}></Info>)
            }
            </div>
        </div>
    );
};

export default Home;