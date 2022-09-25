import axios from 'axios';

export const getMRP = async (page:number) =>{
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
    try{

        const resMrp = await axios(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${API_KEY}`)
        return resMrp.data.photos
        
    }catch(err:any){
        return err.message
    }
    
}