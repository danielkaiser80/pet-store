export interface Inventory {
	sold: number;
	string: number;
	pending: number;
	available: number;
}
export interface NewOrder {
	petId: number;
	quantity: number;
	shipDate: number;
	status: string;
	complete: boolean;
}

export interface Order extends NewOrder {
	id: number;
}

export enum Status {
	PLACED = 'placed',
	APPROVED = 'approved',
	DELIVERED = 'delivered',
}
