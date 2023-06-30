import axios from "../axios";

import { NewPet, Pet, Status } from "../types/pet";

export const get = (id: number): Promise<Pet> =>
  axios.get(`pet/${id}`).then((res) => res.data);

export const findByStatus = (status: Status): Promise<Array<Pet>> =>
  axios.get(`pet/findByStatus?status=${status}`).then((res) => res.data);

export const update = (pet: Pet): Promise<Pet> =>
  axios.put(`pet`, pet).then((res) => res.data);

export const create = (pet: NewPet): Promise<Pet> =>
  axios.post(`pet`, pet).then((res) => res.data);

export const remove = (id: number) =>
  axios.delete(`pet/${id}`).then((res) => res.data);
