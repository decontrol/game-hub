import useData from './useData';
import { GameQuery } from '@/App';

export type Platform = {
	id: number;
	name: string;
	slug: string;
};

export type Game = {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	genres: { id: number; name: string; slug: string }[];
};

const useGames = (gameQuery: GameQuery) =>
	useData<Game>(
		'games',
		{
			params: {
				genres: gameQuery.genre?.id,
				platforms: gameQuery.platform,
				ordering: gameQuery.sortOrder,
			},
		},
		[gameQuery]
	);
export default useGames;
