import axios from "axios";
import ISummonerData from "../models/ISummonerData";

const leagueApi = "https://euw1.api.riotgames.com/lol/"

const summonerService = {
    getSummonerInfo: function(name: string) {
        return axios.get(leagueApi + 'summoner/v4/summoners/by-name/' + name)
    },

    getSummonerLeagueInfo: function(id: string) {
        return axios.get(leagueApi + 'league/v4/entries/by-summoner/' + id)
    },

    getSoloQ: function(data: any) {
        let goodQueue: any;
        data.forEach((queue:any) => {
            if (queue.queueType === "RANKED_SOLO_5x5")
                goodQueue = queue;
        });
        return goodQueue;
    },

    compareLeaguePoints: function(a: ISummonerData, b: ISummonerData ) {
        if ( a.leaguePoints < b.leaguePoints )
          return 1;
        if ( a.leaguePoints > b.leaguePoints )
          return -1;
        return 0;
    },

    compareRank: function(a: any, b: any) {
        switch (a.rank) {
            case 'IV':
                a.rankTemp = 0;
                break;
            case 'III':
                a.rankTemp = 1;
                break;
            case 'II':
                a.rankTemp = 2;
                break;
            case 'I':
                a.rankTemp = 3;
                break;
        };

        switch (b.rank) {
            case 'IV':
                b.rankTemp = 0;
                break;
            case 'III':
                b.rankTemp = 1;
                break;
            case 'II':
                b.rankTemp = 2;
                break;
            case 'I':
                b.rankTemp = 3;
                break;
        };

        if ( a.rankTemp < b.rankTemp )
            return 1;
        if ( a.rankTemp > b.rankTemp )
            return -1;
        return 0;
    },

    compareTier: function(a: any, b: any) {
        switch (a.tier) {
            case 'IRON':
                a.rankTemp = 0;
                break;
            case 'BRONZE':
                a.rankTemp = 1;
                break;
            case 'SILVER':
                a.rankTemp = 2;
                break;
            case 'GOLD':
                a.rankTemp = 3;
                break;
            case 'PLATINUM':
                a.rankTemp = 4;
                break;
            case 'DIAMOND':
                a.rankTemp = 5;
                break;
            case 'MASTER':
                a.rankTemp = 6;
                break;
            case 'GRANDMASTER':
                a.rankTemp = 7;
                break;
            case 'CHALLENGER':
                a.rankTemp = 8;
                break;
        };

        switch (b.tier) {
            case 'IRON':
                b.rankTemp = 0;
                break;
            case 'BRONZE':
                b.rankTemp = 1;
                break;
            case 'SILVER':
                b.rankTemp = 2;
                break;
            case 'GOLD':
                b.rankTemp = 3;
                break;
            case 'PLATINUM':
                b.rankTemp = 4;
                break;
            case 'DIAMOND':
                b.rankTemp = 5;
                break;
            case 'MASTER':
                b.rankTemp = 6;
                break;
            case 'GRANDMASTER':
                b.rankTemp = 7;
                break;
            case 'CHALLENGER':
                b.rankTemp = 8;
                break;
        };

        if ( a.rankTemp < b.rankTemp )
            return 1;
        if ( a.rankTemp > b.rankTemp )
            return -1;
        return 0;
    },

    sortSummoners: function(summoners: ISummonerData[]) {
        summoners.sort(this.compareLeaguePoints);
        summoners.sort(this.compareRank);
        summoners.sort(this.compareTier);
        return summoners;
    },

    getSummoners: async function(idList: string[]) {
        var summoners: ISummonerData[] = [];

        for (const id of idList) {
            let summonerData: any = await this.getSummonerLeagueInfo(id).then((statResponse) => { return statResponse });
            summonerData = await this.getSummonerInfo(summonerData.data[0].summonerName).then(accountResponse => {
                summonerData = this.getSoloQ(summonerData.data);
                summonerData.icon = accountResponse.data.profileIconId;
                summonerData.playerLvl = accountResponse.data.summonerLevel;
                return summonerData;
            });
            summoners.push(summonerData);
        }

        summoners = this.sortSummoners(summoners);
        return summoners;
    }
}

export default summonerService;