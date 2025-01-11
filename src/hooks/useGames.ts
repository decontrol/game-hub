import { GameQuery } from '@/App';
import apiClient, { fetchDataResponse } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

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
	rating_top: number;
};

const useGames = (gameQuery: GameQuery) =>
	useQuery<fetchDataResponse<Game[]>, Error>({
		queryKey: ['games', gameQuery], // refetch gamnes every time gameQuery changes
		queryFn: () =>
			apiClient
				.get<fetchDataResponse<Game[]>>('/games', {
					params: {
						genres: gameQuery.genre?.id,
						Parent_platforms: gameQuery.platform,
						ordering: gameQuery.sortOrder,
						search: gameQuery.searchText,
					},
				})
				.then((res) => res.data),
	});

export default useGames;
