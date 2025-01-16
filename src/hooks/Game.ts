import { Platform } from './usePlatforms';

export type Game = {
	id: number;
	name: string;
	slug: string;
	description: string;
	description_raw: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	genres: { id: number; name: string; slug: string }[];
	rating_top: number;
};
