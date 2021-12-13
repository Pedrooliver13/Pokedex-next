import Link from 'next/link';
import { GetStaticProps } from 'next';

import { Props } from 'types/Home';
import { AllPokemonsProps } from 'types/Pokemon';
import { getAllPokemons } from 'services/pokemon';

const Home = (props: Props) => {
  return (
    <div>
      <h1>TODOS OS POKEMONS</h1>

      {props?.pokemons &&
        props?.pokemons.map((pokemon: AllPokemonsProps) => (
          <div key={pokemon.entry_number}>
            <Link href={`/pokemon/${pokemon.entry_number}`}>
              <a>{pokemon.pokemon_species.name}</a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const responses = await getAllPokemons();

  if (!responses.data) return { notFound: true };

  return {
    props: {
      pokemons: responses.data.pokemon_entries
    }
  };
};

export default Home;
