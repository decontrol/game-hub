import axios, { AxiosRequestConfig } from 'axios';

export type fetchDataResponse<T> = {
	count: number;
	results: T[];
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

	getData = (config?: AxiosRequestConfig) => {
		// arrow function doesnt have its own 'this' context
		return axiosInstance.get<fetchDataResponse<T>>(this.endpoint, config).then((res) => res.data);
	};
}

export default APIClient;
