import useGames from '@/hooks/useGames.ts';
import GameCard from './GameCard.tsx';
import GameCardContainer from './GameCardContainer.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';
import { Game } from '@/hooks/useGames.ts';
import { Genre } from '@/hooks/useGenres.ts';
type GameGridProps = {
	selectedGenre: Genre | null;
	selectedPlatform: number | null;
};

const GameGrid = ({ selectedGenre, selectedPlatform }: GameGridProps) => {
	const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <p>{error}</p>}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
				{isLoading &&
					skeletons.map((_, i) => (
						<GameCardContainer key={i}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data.map((item, i) => (
					<GameCardContainer key={i}>
						<GameCard game={item as Game} />
					</GameCardContainer>
				))}
			</div>
		</>
	);
};
export default GameGrid;
