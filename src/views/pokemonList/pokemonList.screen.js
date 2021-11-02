import React, { useEffect, useState } from "react";
import pokemonServices from "../../services/pokemonServices";
import PokemonListLayout from "./pokemonList.layout";

const PokemonListScreen = () => {
  const [listPokemon, setListPokemon] = useState([]);

  const getTypes = (data) => {
      let types = [];
    for (let i of data) {
        i = i.type.name.charAt(0).toUpperCase() + i.type.name.substr(1);
        types = [...types, i];

      }
      return types.join(' - ')
  }

  const getPokemonList = async () => {
    let pokemons = [];
    try {
      const response = await pokemonServices.getListOfPokemon(0, 25);
      for (let i of response.data.results) {
        const response = await pokemonServices.getPokemonDataFromUrl(i.url);
        const pokemon = {
          id: response.data.id,
          name: response.data.name[0].toUpperCase() + response.data.name.substring(1),
          types: getTypes(response.data.types),
          img: response.data.sprites.front_default,
        };
        pokemons = [...pokemons, pokemon];
      }
      setListPokemon(pokemons);
    } catch (error) {
      console.log(
        "🚀 ~ file: pokemonList.screen.js ~ line 11 ~ getPokemonList ~ error",
        error
      );
    }
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return <PokemonListLayout listPokemon={listPokemon} />;
};

export default PokemonListScreen;
