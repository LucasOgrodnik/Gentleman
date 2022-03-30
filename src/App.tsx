import React, { useEffect } from 'react';
import './App.css';
import Summoner from './controllers/summonerController';
import ISummonerData from './models/ISummonerData';
import { Context, summonerIdList } from './service/context';
import summonerService from './service/summonerService';

function App() {
    const { setSummonerList } = React.useContext(Context);

    useEffect(() => {
        summonerService.getSummoners(summonerIdList).then(list => setSummonerList(list));
    }, []);

    return (
        <div className="App">
            <Summoner></Summoner>
        </div>
    );
}

export default App;