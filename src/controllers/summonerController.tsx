import React, { useEffect, useState } from 'react';
import SummonerComponent from '../components/Summoner/Summoner';
import summonerService from '../service/summonerService';
import ISummonerData from '../models/ISummonerData';
import Context from '../service/context';

function Summoner() {
    const { summonerList } = React.useContext(Context);

    return (
        <ul className="SummonerList">
        {
            summonerList ?
            summonerList.map((summoner: ISummonerData) => {
                return (
                    <li>
                    {
                        summoner ? <SummonerComponent {...summoner}></SummonerComponent> : <div></div>
                    }
                    </li>
                )
            }) : <div></div>
        }
        </ul>
    );
}


export default Summoner;