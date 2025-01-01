import usePokemon from '@/hooks/usePokemon';
import PokemonCard from './PokemonCard.tsx';
import PokemonCardContainer from './PokemonCardContainer.tsx';
import PokemonCardSkeleton from './PokemonCardSkeleton.tsx';

type Pokemon = {
	name: string;
	url: string;
};

const GameGrid = () => {
	const { data, error, isLoading } = usePokemon();
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <p>{error}</p>}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				{isLoading &&
					skeletons.map((_, i) => (
						<PokemonCardContainer key={i}>
							<PokemonCardSkeleton />
						</PokemonCardContainer>
					))}
				{data.map((item, i) => (
					<PokemonCardContainer key={i}>
						<PokemonCard pokemon={item as Pokemon} />
					</PokemonCardContainer>
				))}
			</div>
		</>
	);
};
export default GameGrid;
