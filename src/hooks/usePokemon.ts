import apiClient from '@/services/api-client';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

export type Pokemon = {
	name: string;
	url: string;
};

export type fetchGamesResponse = {
	count: number;
	// next: string;
	// previous: string;
	results: Pokemon[];
};

const useGames = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const controller = new AbortController();
		apiClient
			.get<fetchGamesResponse>('/pokemon', { signal: controller.signal })
			.then((res) => setPokemons(res.data.results))
			.catch((err) => {
				if (err instanceof CanceledError) {
					return;
				}
				setError(err.message);
			});

		return () => controller.abort();
	}, []);

	return { pokemons, error };
};

export default useGames;
