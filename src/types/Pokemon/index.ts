export type AllPokemonsProps = {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  };
};

export type PokemonType = {
  pokemon: {
    id: number;
    name: string;
    sprites: {
      other: {
        dream_world: {
          front_default: string;
        };
      };
    };
  };
};
