import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';
import apiClient, { fetchDataResponse } from '@/services/api-client';

export type Genre = {
	id: number;
	name: string;
	slug: string;
	image_background: string;
};

// const useGenres = () => useData<Genre>('genres');
// using static data instead
const useGenres = () =>
	useQuery<fetchDataResponse<Genre>, Error>({
		queryKey: ['genres'],
		queryFn: () => apiClient.get<fetchDataResponse<Genre>>('/genres').then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, // 24 hrs
		initialData: { count: genres.length, results: genres },
	});

export default useGenres;
