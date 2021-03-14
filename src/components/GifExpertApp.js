import React, { Fragment, useState } from 'react';
import { AddCategory } from './AddCategory';

export const GifExpertApp = () => {
	// const categories = ['Hunter X', 'Samurai X', 'Shingeki no Kyojin'];

	const [categories, setCategories] = useState([
		'Hunter X',
		'Samurai X',
		'Shingeki no Kyojin',
	]);

	// const handleAdd = () => {
	// 	// setCategories([...categories, 'Dragon Ball ']);
	// 	setCategories((cats) => [...cats, 'Dragon Ball']);
	// };

	return (
		<Fragment>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map((category) => {
					return <li key={category}> {category} </li>;
				})}
			</ol>
		</Fragment>
	);
};
