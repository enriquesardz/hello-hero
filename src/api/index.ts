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
      description: pokemonDescription.flavor_text_entries[0].flavor_text,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
