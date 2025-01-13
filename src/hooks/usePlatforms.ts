import APIClient, { fetchDataResponse } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

export type Platform = {
	id: number;
	name: string;
	slug: string;
};

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
	useQuery<fetchDataResponse<Platform>, Error>({
		queryKey: ['platforms'],
		queryFn: apiClient.getData,
		staleTime: ms('1 day'),
	});

export default usePlatforms;
