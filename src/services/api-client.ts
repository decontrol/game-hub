import axios from 'axios';

export default axios.create({
	baseURL: 'https://pokeapi.co/api/v2/',
	// params: {
	// 	key: 'b8e9613fbb4b4012811cf99d7c2acabd',
	// },
});
