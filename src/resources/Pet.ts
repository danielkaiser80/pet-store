import axios from "../axios";

import { Pet, Status } from "../types/pet";

export const findByStatus = (status: Status) =>
  axios
    .get<Pet[]>(`pet/findByStatus?status=${status}`)
    .then(({ data }) => data);
