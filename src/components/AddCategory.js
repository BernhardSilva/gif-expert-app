import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmitt = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1) {
      setCategories((cats) => [...cats, inputValue]); //cats => Callback que tiene el estado anterior
      setinputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmitt}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
