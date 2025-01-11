import APIClient, { fetchDataResponse } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

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
		staleTime: 24 * 60 * 60 * 1000,
	});

export default usePlatforms;
