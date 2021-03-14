import React from 'react';
import {GifGridItem} from './GifGridItem';
import {useFetchGifs} from '../Hooks/useFetchGifs';
import loader from '../assets/loader.gif';

export const GifGrid = ({category}) => {
  const {data: images, loading} = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__backInRight">{category}</h3>
      {loading && <img className="loader" src={loader} alt="loading..." />}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
