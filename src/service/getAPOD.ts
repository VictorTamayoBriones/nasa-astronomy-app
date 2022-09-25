import axios from 'axios';
import { IApodModel } from '../models/ApodModel';

export const getAPOD = async () =>{
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

    try{
        const ApodRes = await axios(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        const ApodData: IApodModel = ApodRes.data
        return ApodData;

    }catch(err: any){

        return err.message
        
    }
}