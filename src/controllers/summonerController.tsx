import React, { useEffect, useState } from 'react';
import SummonerComponent from '../components/Summoner/Summoner';
import summonerService from '../service/summonerService';
import ISummonerData from '../models/ISummonerData';

function Summoner(props: any) {
    const [summoner, setSummoner] = useState<ISummonerData>();

    function getSoloQ(data: any) {
        let goodQueue: any;
        data.forEach((queue:any) => {
            if (queue.queueType === "RANKED_SOLO_5x5")
                goodQueue = queue;
        });
        return goodQueue;
    }

    useEffect(() => {
        let summonerData: any;
        summonerService.getSummonerLeagueInfo(props.id).then(statResponse => {
            summonerService.getSummonerInfo(statResponse.data[0].summonerName).then(accountResponse => {
                summonerData = getSoloQ(statResponse.data);
                summonerData.icon = accountResponse.data.profileIconId;
                summonerData.playerLvl = accountResponse.data.summonerLevel;
                setSummoner(summonerData);
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