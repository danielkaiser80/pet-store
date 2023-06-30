import { useContext, useEffect, useState } from "react";

import { CardGroup } from "react-bootstrap";
import { Card } from "../../components/Card";
import { Pet, Status } from "../../types/pet";
import { findByStatus } from "../../resources/Pet";
import { SearchContext } from "../../App";
import { RandomDog } from "../../axios";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const pageSize = 10;

const List = () => {
  const { query } = useContext(SearchContext);
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [limit, setLimit] = useState<number>(pageSize);
  const [isFetching, setIsFetching] = useInfiniteScroll(() => {
    limit < pets.length ? setLimit(limit + pageSize) : setLimit(pets.length);
    setIsFetching(false);
  });

  useEffect(() => {
    findByStatus(Status.AVAILABLE).then(setPets);
  }, []);

  useEffect(() => {
    Promise.all(
      pets
        .filter(
          (pet: Pet) =>
            !query ||
            (pet && pet.name && pet.name.match(new RegExp(query, "i")))
        )
        .slice(0, limit)
        .map(async (pet: Pet) => {
          const { data } = await RandomDog.get(`random?petId=${pet.id}`);

          pet.photoUrl = data.message;
          return pet;
        })
    ).then((result) => setFilteredPets(result));
  }, [pets, limit, query]);

  return (
    <>
      <CardGroup>
        {filteredPets.map((pet: Pet, idx: number) => (
          <Card key={idx} pet={pet} />
        ))}
      </CardGroup>
      {isFetching ? "Fetching..." : ""}
    </>
  );
};

export default List;
