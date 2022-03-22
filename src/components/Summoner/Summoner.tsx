import React, { FC } from 'react';
import ISummonerData from '../../models/ISummonerData';
import Emblem_Iron from '../../assets/Emblem_Iron.png'
import Emblem_Bronze from '../../assets/Emblem_Bronze.png'
import Emblem_Silver from '../../assets/Emblem_Silver.png'
import Emblem_Gold from '../../assets/Emblem_Gold.png'
import Emblem_Platinum from '../../assets/Emblem_Platinum.png'
import Emblem_Diamond from '../../assets/Emblem_Diamond.png'
import Emblem_Master from '../../assets/Emblem_Master.png'
import Emblem_Grandmaster from '../../assets/Emblem_Grandmaster.png'
import Emblem_Challenger from '../../assets/Emblem_Challenger.png'
import './Summoner.scss';

function switchTier(rank: string) {
    switch (rank) {
        case 'IRON':
            return Emblem_Iron;
        case 'BRONZE':
            return Emblem_Bronze;
        case 'SILVER':
            return Emblem_Silver;
        case 'GOLD':
            return Emblem_Gold;
        case 'PLATINUM':
            return Emblem_Platinum;
        case 'DIAMOND':
            return Emblem_Diamond;
        case 'MASTER':
            return Emblem_Master;
        case 'GRANDMASTER':
            return Emblem_Grandmaster;
        case 'CHALLENGER':
            return Emblem_Challenger;
    }
}

const SummonerComponent: FC<ISummonerData> = (summoner) => (
    <div className="SummonerComponent">
        <img src={switchTier(summoner.tier)} className="card__image" alt="" />
        <div className="card__overlay">
            <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" /></svg>
            <img className="card__thumb" src={"http://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/" + summoner.icon + ".png"} alt="" />
            <div className="card__header-text">
                <h3 className="card__title">{summoner.summonerName}</h3>
                <span className="card__status">{summoner.tier} {summoner.rank}    {summoner.leaguePoints} LP</span>
            </div>
            </div>
            <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        </div>
    </div>
);

export default SummonerComponent;