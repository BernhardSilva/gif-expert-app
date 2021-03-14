import React, { Fragment, useState } from 'react';
import AddCategory from './AddCategory';

const GifExpertApp = () => {
	// const categories = ['Hunter X', 'Samurai X', 'Shingeki no Kyojin'];

	const [categories, setCagerories] = useState([
		'Hunter X',
		'Samurai X',
		'Shingeki no Kyojin',
	]);

	// const handleAdd = () => {
	// 	// setCagerories([...categories, 'Dragon Ball ']);
	// 	setCagerories((cats) => [...cats, 'Dragon Ball']);
	// };

	return (
		<Fragment>
			<h2>GifExpertApp</h2>
			<AddCategory></AddCategory>
			<hr />

			<ol>
				{categories.map((category) => {
					return <li key={category}> {category} </li>;
				})}
			</ol>
		</Fragment>
	);
};

export default GifExpertApp;
