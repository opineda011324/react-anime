import { useEffect, useState } from "react";
import GetGifs from "../helpers/GetGif";

const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() =>{
      const newImages =await GetGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }
    
  useEffect( () => {
    getImages();
  },[])
  
    return{
        images,
        isLoading
    }
}

export default useFetchGifs;