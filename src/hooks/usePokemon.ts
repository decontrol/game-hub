import useData from './useData';

export type Pokemon = {
	name: string;
	url: string;
};

const useGames = () => useData<Pokemon>('pokemon');
export default useGames;
