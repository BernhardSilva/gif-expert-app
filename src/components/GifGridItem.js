import React from 'react';

export const GifGridItem = ({title, url}) => {
  const cutGifTextTitle = `${title}`.replace('GIF', '');

  return (
    <div className="card">
      <img src={url} alt={cutGifTextTitle} />
      <p>{cutGifTextTitle}</p>
    </div>
  );
};
