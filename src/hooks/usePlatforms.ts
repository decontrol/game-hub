import APIClient, { fetchDataResponse } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Platform } from '../entities/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
	useQuery<fetchDataResponse<Platform>, Error>({
		queryKey: ['platforms'],
		queryFn: apiClient.getAll,
		staleTime: ms('1 day'),
	});

export default usePlatforms;
