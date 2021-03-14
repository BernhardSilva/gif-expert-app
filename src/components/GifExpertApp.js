import React, {useState} from 'react';
import {AddCategory} from './AddCategory';
import {GifGrid} from './GifGrid';

export const GifExpertApp = () => {
  // const categories = ['Hunter X', 'Samurai X', 'Shingeki no Kyojin'];

  const [categories, setCategories] = useState(['Shingeki no Kyojin']);

  return (
    <>
      <h2>GifStuff</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
