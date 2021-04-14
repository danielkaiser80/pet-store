import axios from '../axios';

import { Order as OrderType, NewOrder, Inventory } from '../types/store';

export const Order = {
	get: (id: number): Promise<OrderType> => axios.get(`store/order/${id}`).then((response) => response.data),
	remove: (id: number): Promise<any> => axios.delete(`store/order/${id}`).then((response) => response.data),
	create: (order: NewOrder): Promise<OrderType> => axios.post(`store/order`, order).then((response) => response.data),
};

export const inventory = (): Promise<Inventory> => axios.get(`store/inventory`).then((response) => response.data);
