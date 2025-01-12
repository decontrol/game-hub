import { Fragment } from 'react';
// import { useInView } from 'react-intersection-observer';
import InfiniteScroll from 'react-infinite-scroll-component';
import GameCard from './GameCard.tsx';
import GameCardContainer from './GameCardContainer.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';
import { Game } from '@/hooks/useGames.ts';
import { GameQuery } from '@/App.tsx';
import useGames from '@/hooks/useGames.ts';
import Spinner from './Spinner.tsx';

type GameGridProps = {
	gameQuery: GameQuery;
};

type Page = {
	results: Game[];
};

const GameGrid = ({ gameQuery }: GameGridProps) => {
	const pageSize = 20;
	const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames({
		...gameQuery,
		pageSize,
	});

	// const { ref, inView } = useInView();

	// useEffect(() => {
	// 	if (inView && hasNextPage) {
	// 		fetchNextPage();
	// 	}
	// }, [inView, hasNextPage, fetchNextPage]);

	const skeletons = [1, 2, 3, 4, 5, 6];

	const fetchedGameCount =
		data?.pages.reduce((acc: number, page: any) => acc + (page.results?.length || 0), 0) || 0;

	if (isLoading) return <p>Loading...</p>;

	if (error) return <p>{error.message}</p>;

	return (
		<>
			<InfiniteScroll
				dataLength={fetchedGameCount as number}
				hasMore={!!hasNextPage}
				next={() => fetchNextPage()}
				loader={<Spinner />}>
				{/* "!!" to make sure the value is boolean not undefined. Undefined will be converted to
				boolean as false */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
					{isLoading &&
						skeletons.map((_, i) => (
							<GameCardContainer key={i}>
								<GameCardSkeleton />
							</GameCardContainer>
						))}
					{data?.pages.map((page, index) => (
						<Fragment key={index}>
							{(page as { results: Game[] }).results.map((game: Game, i: number) => (
								<GameCardContainer key={i}>
									<GameCard game={game} />
								</GameCardContainer>
							))}
						</Fragment>
					))}
				</div>
			</InfiniteScroll>

			{/* {hasNextPage && (
				<div className='w-full flex justify-center'>
					<button
						className='bg-accent border-none focus:outline-none hover:opacity-60 px-3 py-1 rounded-full my-4'
						disabled={!hasNextPage || isFetchingNextPage}
						onClick={() => fetchNextPage()}>
						{isFetchingNextPage ? 'Loading...' : 'Load more'}
					</button>
				</div>
			)} */}

			{/* <Using react-intersection-observer */}

			{/* {!isFetchingNextPage && hasNextPage && (
				<div className='w-full flex justify-center'>
					<Spinner />
				</div>
			)} */}
		</>
	);
};
export default GameGrid;
