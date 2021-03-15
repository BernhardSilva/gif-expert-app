import React, {useState} from 'react';
import {AddCategory} from './AddCategory';
import {GifGrid} from './GifGrid';
// import logo from '../assets/logo.png';
import logoGifexpert from '../assets/logo-gifexpert.png';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Shingeki no Kyojin']);

  return (
    <>
      {/* <label className="giphy-message">Powered by Giphy</label>
      <img className="logo" src={logo} alt="logo" /> */}
      <img className="logo-gifexpert" src={logoGifexpert} alt="logo-gifexpert" />

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
