import useData from './useData';

type Platform = {
	id: number;
	name: string;
	slug: string;
};

export type Game = {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
};

const useGames = () => useData<Game>('games');
export default useGames;
