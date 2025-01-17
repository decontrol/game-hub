import { useQuery } from '@tanstack/react-query';
import APIClient, { fetchDataResponse } from '@/services/api-client';
import { Trailer } from '@/entities/Trailer';
import ms from 'ms';

// Replace with actual API endpoint

const useTrailers = (gameId: number) => {
	const apiClient = new APIClient<Trailer>('/games/' + gameId + '/movies');
	return useQuery<fetchDataResponse<Trailer>, Error>({
		queryKey: ['trailer', gameId],
		queryFn: apiClient.getAll,
		staleTime: ms('1 day'),
	});
};

export default useTrailers;
