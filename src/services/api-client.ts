import axios from 'axios';

export type fetchDataResponse<T> = {
	count: number;
	results: T[];
};

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'c31e26d0a9b6456889f98c5978ae29af',
	},
});
