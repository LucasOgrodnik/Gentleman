import axios from "axios";

const leagueApi = "https://euw1.api.riotgames.com/lol/"

const summonerService = {
    getSummonerInfo: function(name: string) {
        return axios.get(leagueApi + 'summoner/v4/summoners/by-name/' + name)
    },

    getSummonerLeagueInfo: function(id: string) {
        return axios.get(leagueApi + 'league/v4/entries/by-summoner/' + id)
    }
}

export default summonerService;