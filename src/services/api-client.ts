import axios, { AxiosRequestConfig } from 'axios';

export type fetchDataResponse<T> = {
	count: number;
	next: string | null;
	results?: T[];
};

export const axiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'c31e26d0a9b6456889f98c5978ae29af',
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config?: AxiosRequestConfig) => {
		// arrow function doesnt have its own 'this' context
		return axiosInstance.get<fetchDataResponse<T>>(this.endpoint, config).then((res) => res.data);
	};
	getSingle = (id: string | number) =>
		axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data);
}

export default APIClient;
