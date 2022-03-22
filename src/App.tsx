import React, { useEffect } from 'react';
import './App.css';
import Summoner from './controllers/summonerController';

function App() {
  const summonerList = [
    "Lucarabine",
    "wavyboi",
    "Ssammi",
    "BenjaCHANCE",
    "Bersebius",
    "H u Goyave",
    "patate verte",
    "wistful kid",
    "ZefMan"
  ]

  return (
    <div className="App">
      <ul className="SummonerList">
        {
          summonerList.map((summoner: string, index: number) => {
            return <Summoner name={summoner} key={index}></Summoner>
          })
        }
      </ul>
    </div>
  );
}

export default App;
