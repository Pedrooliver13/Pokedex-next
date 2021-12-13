import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import { PokemonType } from 'types/Pokemon';
import { getPokemonById } from 'services/pokemon';

const Pokemon = ({ pokemon }: PokemonType) => {
  const router = useRouter();

  if (router.isFallback) return <p>Loading...</p>;

  return (
    <div>
      <Link href="/">
        <a>Back To Home</a>
      </Link>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={`${pokemon.name} image`}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await getPokemonById(params?.id);
  return {
    props: {
      pokemon: response?.data
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};

export default Pokemon;
