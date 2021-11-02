import { pokeApi } from "../utils/appiUrlConfig";
import axios from "axios";

export const pokemonServices = {
    getListOfPokemon(start = 0, limit = 25) {
        return axios.get(pokeApi + `/pokemon?limit=${limit}&offset=${start}`)
    },

    getPokemonData(idPokemon) {
        const data = {
            id: idPokemon,
        }
        return axios.get(pokeApi + '/v1/counter/inc', data)
    },

    getPokemonDataFromUrl(url) {
        return axios.get(url);
    }
    
}

export default pokemonServices;