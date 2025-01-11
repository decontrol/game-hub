import apiClient, { fetchDataResponse } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

export type Platform = {
	id: number;
	name: string;
	slug: string;
};

// const usePlatforms = () => useData<Platform>('platforms/lists/parents');

const usePlatforms = () =>
	useQuery<fetchDataResponse<Platform>, Error>({
		queryKey: ['platforms'],
		queryFn: () =>
			apiClient
				.get<fetchDataResponse<Platform>>('/platforms/lists/parents')
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000,
	});

export default usePlatforms;
