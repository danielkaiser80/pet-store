export interface Pet {
  category: Category;
  name: string;
  photoUrls: Array<string>;
  tags: Array<Tag>;
  status: Status;
  id: number;
  photoUrl?: string;
}

export enum Status {
  AVAILABLE = "available",
  PENDING = "pending",
}

export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}
