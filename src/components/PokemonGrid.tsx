import usePokemon from '../hooks/usePokemon.ts';
import PokemonCard from './PokemonCard.tsx';
import PokemonCardSkeleton from './PokemonCardSkeleton.tsx';

const GameGrid = () => {
	const { pokemons, error, isLoading } = usePokemon();
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <p>{error}</p>}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				{isLoading && skeletons.map((_, i) => <PokemonCardSkeleton key={i} />)}
				{pokemons.map((pokemon) => (
					<PokemonCard key={pokemon.url} pokemon={pokemon} />
				))}
			</div>
		</>
	);
};
export default GameGrid;
