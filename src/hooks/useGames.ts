import { GameQuery } from '@/App';
import APIClient, { fetchDataResponse } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import { Platform } from './usePlatforms';

export type Game = {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	genres: { id: number; name: string; slug: string }[];
	rating_top: number;
};

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
	useQuery<fetchDataResponse<Game>, Error>({
		queryKey: ['games', gameQuery], // refetch gamnes every time gameQuery changes
		queryFn: () =>
			apiClient.getData({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
				},
			}),
	});

export default useGames;
