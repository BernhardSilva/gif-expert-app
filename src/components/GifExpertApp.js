import React, {Fragment, useState} from 'react';
import {AddCategory} from './AddCategory';
import {GifGrid} from './GifGrid';

export const GifExpertApp = () => {
  // const categories = ['Hunter X', 'Samurai X', 'Shingeki no Kyojin'];

  const [categories, setCategories] = useState(['Shingeki no Kyojin']);

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </Fragment>
  );
};
