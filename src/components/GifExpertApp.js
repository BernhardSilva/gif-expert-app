import React, { Fragment, useState } from 'react';

const GifExpertApp = () => {
	// const categories = ['Hunter X', 'Samurai X', 'Shingeki no Kyojin'];

	const [categories, setCagerories] = useState([
		'Hunter X',
		'Samurai X',
		'Shingeki no Kyojin',
	]);

	const handleAdd = () => {
		// setCagerories([...categories, 'Dragon Ball ']);
		setCagerories((cats) => [...cats, 'Dragon Ball']);
	};

	return (
		<Fragment>
			<h2>GifExpertApp</h2>
			<hr />

			<button onClick={handleAdd}>Agregar</button>

			<ol>
				{categories.map((category) => {
					return <li key={category}> {category} </li>;
				})}
			</ol>
		</Fragment>
	);
};

export default GifExpertApp;
