import React, {useState} from 'react';
import {AddCategory} from './AddCategory';
import {GifGrid} from './GifGrid';
import logo from '../assets/logo.png';

export const GifExpertApp = () => {
  // const categories = ['Hunter X', 'Samurai X', 'Shingeki no Kyojin'];

  const [categories, setCategories] = useState(['Shingeki no Kyojin']);

  return (
    <>
      <img className="logo" src={logo} alt="logo" />
      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
