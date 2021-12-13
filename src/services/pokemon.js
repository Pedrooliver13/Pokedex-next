import { api } from './api';

// pokedex/2/

export const getAllPokemons = async () => {
  try {
    const response = await api.get('/pokedex/1');
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPokemonById = async (id) => {
  if (!id) return null;

  try {
    const response = await api.get(`/pokemon/${id}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
