import axios from 'axios';

export const RandomDog = axios.create({
	baseURL: 'https://dog.ceo/api/breeds/image',
});

export default axios.create({
	baseURL: 'https://petstore.swagger.io/v2/',
	headers: {
		'Content-Type': 'application/json',
	},
});
