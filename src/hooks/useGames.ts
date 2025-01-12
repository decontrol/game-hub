import { GameQuery } from '@/App';
import APIClient, { fetchDataResponse } from '@/services/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';
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

type GameInfiniteQuery = GameQuery & {
	pageSize: number;
};

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameInfiniteQuery) =>
	useInfiniteQuery<fetchDataResponse<Game>, Error>({
		queryKey: ['games', gameQuery], // refetch gamnes every time gameQuery changes
		queryFn: ({ pageParam = 1 }: { pageParam: number }) =>
			apiClient.getData({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
					page_size: gameQuery.pageSize,
				},
			}),
		placeholderData: (prev) => prev,
		staleTime: 24 * 60 * 60 * 1000,
		getNextPageParam: (lastPage, allPages) => {
			console.log({ lastPage, allPages });
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});

export default useGames;
