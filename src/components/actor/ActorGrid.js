import React from 'react';
import ActorCard from './ActorCard';
import { FlexGrid } from '../styled';
import Fade from 'react-reveal/Fade';

import IMG_NOT_FOUND from '../../img/not-found.png';

function ActorGrid({ data }) {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <Fade bottom>
          <ActorCard
            key={person.id}
            name={person.name}
            country={person.country ? person.country.name : 'null'}
            birthday={person.birhtday}
            deathday={person.deathday}
            gender={person.gender}
            image={person.image ? person.image.medium : IMG_NOT_FOUND}
          />
        </Fade>
      ))}
    </FlexGrid>
  );
}

export default ActorGrid;
