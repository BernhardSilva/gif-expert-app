import React from 'react';
// import {GifGridItem} from './GifGridItem';
import {getGifs} from '../helpers/getGifs';
import {useFetchGifs} from '../Hooks/useFetchGifs';

export const GifGrid = ({category}) => {
  //   const [images, setImages] = useState([]);
  const {loading} = useFetchGifs();
  console.log({loading});
  //   useEffect(() => {
  //     getGifs(category).then(setImages);
  //   }, [category]);

  return (
    <>
      <h3>{category}</h3>
      {loading ? 'Cargando...' : 'Data cargada'}
      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> */}
    </>
  );
};
