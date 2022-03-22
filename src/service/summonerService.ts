import axios from "axios";

const leagueApi = "https://euw1.api.riotgames.com/lol/"

const summonerService = {
    getSummonerId: function(name: string) {
        return axios.get(leagueApi + 'summoner/v4/summoners/by-name/' + name)
    },

    getSummonerInfo: function(id: string) {
        return axios.get(leagueApi + 'league/v4/entries/by-summoner/' + id)
    }
}

export default summonerService;