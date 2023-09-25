import React, { useEffect } from 'react';
import { serverFunctions } from '../../utils/serverFunctions';

export function LoadingPage({ slideUrl, onDataLoaded }) {
  // TODO: Loading the data
  useEffect(() => {
    console.log('loading data');
    serverFunctions
      .getSlide(slideUrl)
      .then(onDataLoaded)
      .catch((err) => {
        alert(err);
      });
  }, [slideUrl]);

  return (
    <div className="loading">
      <div className="loading-text">
        Give it a sec! <br /> This may take a while to get all the elements in
        the slide.
      </div>
      <div className="loading-gif"></div>
    </div>
  );
}
