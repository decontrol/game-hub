import Platform from '@/entities/Platform';
import Genre from '@/entities/Genre';
import Publisher from './Publisher';

type Game = {
	id: number;
	name: string;
	slug: string;
	description: string;
	description_raw: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	genres: Genre[];
	rating_top: number;
	publishers: Publisher[];
};

export default Game;
