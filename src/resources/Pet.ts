import axios from "../axios";

import { Pet, Status } from "../types/pet";

export const findByStatus = (status: Status): Promise<Array<Pet>> =>
  axios.get(`pet/findByStatus?status=${status}`).then((res) => res.data);
