import React, { useEffect } from 'react';
import './App.css';
import Summoner from './controllers/summonerController';

function App() {
  const summonerIdList = [
    "-_lBhlx61blAUFL3OHwDy0_rhSpzYIgrKBXLOtzzuE_amh0", // Lucas
    "-R_Pnt8d4Dmp3TQTeYzxCuD4wrAHMyoc5DK9Azta0iOaKoYu", // Amine
    "Jv-vJ8MxhO2E2mIJSilzYc3WLZMB-La5GDhEbSVTfOQMpqg", // Sami
    "KpH2WfrUp0H9-laNgAjef3GC9_842w_EfVXzNgprWLKE5aI", // Benja
    "5gniB8VFdUtgRRyTH5DD5W69DZwOqqOk5XjgBMGPukPqljE", // Tanguy
    "qV9k8_wwMymojNPAR-0lgT_eLClvKFsar7TqkLdphosiql8", // Hugo
    "t2d2V1HKFxpydQAgcpYL9loeB-sbqRx_RYyt-pY-oPNmABQ", // Patate
    "PrnAqwkhRdwErG7Vu3uprkvg2EXGLnoW4PZ00W7FzW7CAgI", // Gabin
    "xpZhkY2eMX3XbMtHJ1mi0O3P1r9IOEYzUU14QLTbMPDVps0", // Zef
    "ynTm8MelaHDEFKjHJNIQGLqCT621zWXYhS5pcdenOT6Q4ik" // M
  ]

  return (
    <div className="App">
      <ul className="SummonerList">
        {
          summonerIdList.map((id: string, index: number) => {
            return <Summoner id={id} key={index}></Summoner>
          })
        }
      </ul>
    </div>
  );
}

export default App;