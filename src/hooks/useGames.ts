import useData from './useData';

export type Game = {
	id: number;
	name: string;
	background_image: string;
	url: string;
};

const useGames = () => useData<Game>('games');
export default useGames;
