import React from 'react';
import ActorCard from './ActorCard';

import IMG_NOT_FOUND from '../../img/not-found.png';

function ActorGrid({ data }) {
  return (
    <div>
      <div>
        {data.map(({ person }) => (
          <ActorCard
            key={person.id}
            name={person.name}
            country={person.country ? person.country.name : 'null'}
            birthday={person.birhtday}
            deathday={person.deathday}
            gender={person.gender}
            image={person.image ? person.image.medium : IMG_NOT_FOUND}
          />
        ))}
      </div>
    </div>
  );
}

export default ActorGrid;
