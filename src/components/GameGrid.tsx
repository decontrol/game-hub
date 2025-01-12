import useGames from '@/hooks/useGames.ts';
import GameCard from './GameCard.tsx';
import GameCardContainer from './GameCardContainer.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';
import { Game } from '@/hooks/useGames.ts';
import { GameQuery } from '@/App.tsx';
import { Fragment } from 'react';
import { fetchDataResponse } from '@/services/api-client.ts';
type GameGridProps = {
	gameQuery: GameQuery;
};

const GameGrid = ({ gameQuery }: GameGridProps) => {
	const pageSize = 20;
	const { data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGames({
		...gameQuery,
		pageSize,
	});
	console.log(data?.pages);
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (isLoading) return <p>Loading...</p>;

	if (error) return <p>{error.message}</p>;

	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
				{isLoading &&
					skeletons.map((_, i) => (
						<GameCardContainer key={i}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data?.pages.map((page: fetchDataResponse<Game>, index: number) => (
					<Fragment key={index}>
						{page.results.map((game: Game, i: number) => (
							<GameCardContainer key={i}>
								<GameCard game={game as unknown as Game} />
							</GameCardContainer>
						))}
					</Fragment>
				))}
			</div>

			{hasNextPage && (
				<div className='w-full flex justify-end'>
					<button
						className='bg-accent border-none focus:outline-none hover:opacity-60 px-3 py-1 rounded-full my-4'
						disabled={!hasNextPage || isFetchingNextPage}
						onClick={() => fetchNextPage()}>
						{isFetchingNextPage ? 'Loading...' : 'Load more'}
					</button>
				</div>
			)}
		</>
	);
};
export default GameGrid;
