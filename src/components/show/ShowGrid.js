import React from 'react';
import ShowCard from './ShowCard';
import { FlexGrid } from '../styled';
import Fade from 'react-reveal/Fade';

import IMG_NOT_FOUND from '../../img/not-found.png';
import { useShows } from '../../misc/custom-hooks';

function ShowGrid({ data }) {
  const [starredShows, dispatchStarred] = useShows();
  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId: show.id });
          } else {
            dispatchStarred({ type: 'ADD', showId: show.id });
          }
        };
        return (
          <Fade bottom>
            <ShowCard
              key={show.id}
              id={show.id}
              name={show.name}
              image={show.image ? show.image.medium : IMG_NOT_FOUND}
              summary={show.summary}
              onStarClick={onStarClick}
              isStarred={isStarred}
            />
          </Fade>
        );
      })}
    </FlexGrid>
  );
}

export default ShowGrid;
