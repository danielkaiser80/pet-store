import axios from '../axios';

import {Inventory} from '../types/store';

export const inventory = (): Promise<Inventory> => axios.get(`store/inventory`).then((response) => response.data);
