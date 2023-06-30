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

export enum Status {
  PLACED = "placed",
}
