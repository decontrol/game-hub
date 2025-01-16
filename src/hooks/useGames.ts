import { GameQuery } from '@/store.ts';
import APIClient, { fetchDataResponse } from '@/services/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Game } from '../entities/Game';

type GameInfiniteQuery = GameQuery & {
	pageSize: number;
};

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameInfiniteQuery) =>
	useInfiniteQuery<fetchDataResponse<Game>, Error>({
		queryKey: ['games', gameQuery], // refetch gamnes every time gameQuery changes
		initialPageParam: 1,
		queryFn: ({ pageParam }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
					page_size: gameQuery.pageSize,
				},
			}),
		placeholderData: (prev) => prev,
		staleTime: ms('1 day'),
		getNextPageParam: (lastPage, allPages) => {
			console.log({ lastPage, allPages });
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});

export default useGames;
