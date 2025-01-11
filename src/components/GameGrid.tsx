import useGames from '@/hooks/useGames.ts';
import GameCard from './GameCard.tsx';
import GameCardContainer from './GameCardContainer.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';
import { Game } from '@/hooks/useGames.ts';
import { GameQuery } from '@/App.tsx';
type GameGridProps = {
	gameQuery: GameQuery;
};

const GameGrid = ({ gameQuery }: GameGridProps) => {
	const { data, error, isLoading } = useGames(gameQuery);
	console.log(data);
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <p>{error.message}</p>;

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
			{isLoading &&
				skeletons.map((_, i) => (
					<GameCardContainer key={i}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{data?.results.map((item, i) => (
				<GameCardContainer key={i}>
					<GameCard game={item as unknown as Game} />
				</GameCardContainer>
			))}
		</div>
	);
};
export default GameGrid;
