import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';
import APIClient, { fetchDataResponse } from '@/services/api-client';

export type Genre = {
	id: number;
	name: string;
	slug: string;
	image_background: string;
};

const apiClient = new APIClient<Genre>('/genres');
const useGenres = () =>
	useQuery<fetchDataResponse<Genre>, Error>({
		queryKey: ['genres'],
		queryFn: apiClient.getData,
		staleTime: 24 * 60 * 60 * 1000, // 24 hrs
		initialData: { count: genres.length, results: genres },
	});

export default useGenres;
