import React from 'react';
import { Card as BCard } from 'react-bootstrap';

import { Pet } from '../types/pet';

interface Props {
	pet: Pet;
}

export const Card = ({ pet }: Props) => {
	return (
		<BCard style={{ width: '18rem', margin: '18px' }}>
			<BCard.Img variant="top" src={pet?.photoUrl} />
			<BCard.Body>
				<BCard.Title>{pet?.name}</BCard.Title>
			</BCard.Body>
		</BCard>
	);
};
