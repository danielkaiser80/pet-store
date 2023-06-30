import {useContext, useEffect, useState} from 'react';
import useInfiniteScroll from 'use-infinite-scroll';

import {CardGroup} from 'react-bootstrap';
import {Card} from '../../components/Card';
import {Pet as PetType, Status} from '../../types/pet';
import {findByStatus} from '../../resources/Pet';
import {SearchContext} from '../../App';
import {RandomDog} from '../../axios';

const pageSize = 10;

const List = () => {
    const {query} = useContext(SearchContext);
    const [pets, setPets] = useState<Array<PetType>>([]);
    const [filteredPets, setFilteredPets] = useState<Array<PetType>>([]);
    const [limit, setLimit] = useState<number>(pageSize);
    const [isFetching, setIsFetching] = useInfiniteScroll(() => {
        limit < pets.length ? setLimit(limit + pageSize) : setLimit(pets.length);
        setIsFetching(false);
    });

    useEffect(() => {
        findByStatus(Status.AVAILABLE).then((newPets: Array<PetType>) => setPets(newPets));
    }, []);

    useEffect(() => {
        Promise.all(
            pets.filter((pet: PetType) => {
                return !(query && (!(pet && pet.name && pet.name.match(new RegExp(query, 'i')))));
            })
                .slice(0, limit)
                .map(async (pet: PetType) => {
                    const {data} = await RandomDog.get(`random?petId=${pet.id}`);

                    pet.photoUrl = data.message;
                    return pet;
                })
        ).then((result: Array<PetType>) => setFilteredPets(result));
    }, [pets, limit, query]);

    return (
        <>
            <CardGroup>
                {filteredPets.map((pet: PetType, idx: number) => (
                    <Card key={idx} pet={pet}/>
                ))}
            </CardGroup>
            {isFetching ? 'Fetching...' : ''}
        </>
    );
};

export default List;
