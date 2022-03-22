import React, { useEffect, useState } from 'react';
import SummonerComponent from '../components/Summoner/Summoner';
import summonerService from '../service/summonerService';
import ISummonerData from '../models/ISummonerData';

function Summoner(props: any) {
    const [summoner, setSummoner] = useState<ISummonerData>();

    useEffect(() => {
        summonerService.getSummonerId(props.name).then(accountResponse => {
            //console.log(accountResponse.data)
            summonerService.getSummonerInfo(accountResponse.data.id).then(statResponse => {
                statResponse.data[1].icon = accountResponse.data.profileIconId;
                statResponse.data[1].playerLvl = accountResponse.data.summonerLevel;
                //console.log(statResponse.data);
                setSummoner(statResponse.data[1]);
            })
        })
    }, []);

    return (
        <li>
            {
                summoner ? <SummonerComponent {...summoner}></SummonerComponent> : <div></div>
            }
        </li>
    );
}

export default Summoner;