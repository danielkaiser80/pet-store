export interface NewPet {
	category: Category;
	name: string;
	photoUrls: Array<string>;
	tags: Array<Tag>;
	status: Status;
}

export interface Pet extends NewPet {
	id: number;
	photoUrl?: string;
}

export enum Status {
	AVAILABLE = 'available',
	PENDING = 'pending',
	SOLD = 'sold',
}

export interface Category {
	id: number;
	name: string;
}

export interface Tag {
	id: number;
	name: string;
}
