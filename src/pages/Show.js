import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

function Show() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoad, setIsLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        setTimeout(() => {
          if (isMounted) {
            setShow(results);
            setIsLoad(false);
          }
        }, 2000);
      })
      .catch(err => {
        if (isMounted) {
          setError(err.msg);
          setIsLoad(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log(show);

  if (isLoad) {
    return <div>Data is being loaded.</div>;
  }
  if (error) {
    return <div>Error occured:{error}</div>;
  }
  return <div>This is the show page</div>;
}

export default Show;
