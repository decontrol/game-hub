import useData from './useData';
import { Genre } from './useGenres';

export type Platform = {
	id: number;
	name: string;
	slug: string;
};

export type Game = {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	genres: { id: number; name: string; slug: string }[];
};

const useGames = (selectedGenre: Genre | null, selectedPlatform: number | null) =>
	useData<Game>('games', { params: { genres: selectedGenre?.id, platforms: selectedPlatform } }, [
		selectedGenre?.id,
		selectedPlatform,
	]);
export default useGames;
