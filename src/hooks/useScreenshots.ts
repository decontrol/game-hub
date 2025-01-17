import { useQuery } from '@tanstack/react-query';
import APIClient, { fetchDataResponse } from '@/services/api-client';
import Screenshot from '@/entities/Screenshot';
import ms from 'ms';

// Replace with actual API endpoint

const useScreenshots = (gameId: number) => {
	const apiClient = new APIClient<Screenshot>('/games/' + gameId + '/screenshots');
	return useQuery<fetchDataResponse<Screenshot>, Error>({
		queryKey: ['screenshots', gameId],
		queryFn: apiClient.getAll,
		staleTime: ms('1 day'),
	});
};

export default useScreenshots;
