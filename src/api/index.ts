// Interfaces
import IPokemon from "interfaces/IPokemon";

export async function getPokemonByName(pokemon: string): Promise<IPokemon> {
  try {
    const pokemonResponse: any = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const _pokemon: any = await pokemonResponse.json();
    const descriptionResponse: any = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${_pokemon.id}/`
    );
    const pokemonDescription: any = await descriptionResponse.json();
    return {
      id: _pokemon.id,
      name: _pokemon.name,
      types: _pokemon.types.map((type: any) => type.type.name),
      image: _pokemon.sprites.front_default,
      imageShiny: _pokemon.sprites.front_shiny,
      imageFemale: _pokemon.sprites.front_female || "",
      imageFemaleShiny: _pokemon.sprites.front_shiny_female || "",
      stats: _pokemon.stats.map((stat: any, index: number) => {
        return {
          id: index,
          type: stat.stat.name,
          base: stat.base_stat,
          effort: stat.effort,
        };
      }),
      description:
        pokemonDescription.flavor_text_entries.find(
          (entry: any) => entry.language.name === "es"
        ).flavor_text || pokemonDescription.flavor_text_entries[0],
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPokemonByPage(offset: number): Promise<IPokemon[]> {
  try {
    const pokemonsResponse: any = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
    );
    const _pokemonsData: any = await pokemonsResponse.json();
    const _pokemons: IPokemon[] = [];
    for (let i in _pokemonsData.results) {
      const pokemonResponse: any = await fetch(_pokemonsData.results[i].url);
      const _pokemon: any = await pokemonResponse.json();
      _pokemons.push({
        id: _pokemon.id,
        name: _pokemon.name,
        image: _pokemon.sprites.front_default,
        imageShiny: "",
        imageFemale: "",
        imageFemaleShiny: "",
        types: [],
        stats: [] as IPokemon[],
        description: "",
      });
    }
    return _pokemons;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
