import usePokemon from '../hooks/usePokemon.ts';

const GameGrid = () => {
	const { pokemons, error } = usePokemon();

	return (
		<>
			{error && <p>{error}</p>}
			<ul className='list-disc'>
				{pokemons.map((pokemon) => (
					<li key={pokemon.url}>
						{pokemon.name} {pokemon.url}
					</li>
				))}
			</ul>
		</>
	);
};
export default GameGrid;
