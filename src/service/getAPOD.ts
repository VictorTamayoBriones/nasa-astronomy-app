import axios from 'axios';
import { IApodModel } from '../models/ApodModel';

export const getAPOD = async () =>{
    const API_KEY = 'EY9fsrcdl6nDe0w8v8Lxy21gSEq4IfJayeKHSEoe';

    try{

        const ApodRes = await axios(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        const ApodData: IApodModel = ApodRes.data
        return ApodData;

    }catch(err: any){

        return err.message
        
    }
}