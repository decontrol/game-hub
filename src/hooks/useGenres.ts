import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';
import APIClient, { fetchDataResponse } from '@/services/api-client';
import ms from 'ms';
import Genre from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');
const useGenres = () =>
	useQuery<fetchDataResponse<Genre>, Error>({
		queryKey: ['genres'],
		queryFn: apiClient.getAll,
		staleTime: ms('1d'), // 24 hrs
		initialData: { count: genres.length, results: genres, next: null },
	});

export default useGenres;
