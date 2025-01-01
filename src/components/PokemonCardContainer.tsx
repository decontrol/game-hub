type PokemonCardContainerProps = {
	children: React.ReactNode;
};

const PokemonCardContainer = ({ children }: PokemonCardContainerProps) => {
	return <div className='w-full rounded-lg overflow-hidden shadow-lg bg-card'>{children}</div>;
};
export default PokemonCardContainer;
