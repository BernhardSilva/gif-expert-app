import {useState, useEffect} from 'react';

export const useFetchGifs = () => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  setTimeout(() => {
    setstate({
      data: [1, 2, 3, 4, 5, 6, 7],
      loading: false,
    });
  }, 3000);

  return state; // {data:[], loading:true}
};
