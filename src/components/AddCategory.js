import React, { useState } from 'react';

const AddCategory = () => {
	const [inputValue, setinputValue] = useState('test input');

	const handleInputChange = (e) => {
		setinputValue(e.target.value);
		// console.log(e.target.value);
	};

	const handleSubmitt = (e) => {
		console.log('Submit echo');
	};

	return (
		<form onSubmit={handleSubmitt}>
			<input type="text" value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

export default AddCategory;
