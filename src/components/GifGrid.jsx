import React from 'react';

import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';


const GifGrid = ({category}) => {

  const {images,isLoading} = useFetchGifs(category)

  return (
    <>
    <h3>{category}</h3>
    {
      isLoading && (<h2>Cargando...</h2>)
    }
    
    <div className='card-grid'>
    {
        images.map((imagenes) => (
         <GifItem key={imagenes.id}
                  {...imagenes}
         />
        ))
      }
    </div>
    </>
  )
}

export default GifGrid;