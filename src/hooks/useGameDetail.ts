import { useQuery } from '@tanstack/react-query';
import APIClient from '@/services/api-client';
import ms from 'ms';

export type GameDetail = {
	id: number;
	name: string;
	description: string;
	description_raw: string;
	background_image: string;
	metacritic: number;
	rating_top: number;
};

const apiClient = new APIClient<GameDetail>('/games');

const useGameDetail = (slug: string | undefined) =>
	useQuery<GameDetail, Error>({
		queryKey: ['game', slug],
		queryFn: () => apiClient.getSingle(slug!),
		staleTime: ms('1 day'),
	});

export default useGameDetail;
