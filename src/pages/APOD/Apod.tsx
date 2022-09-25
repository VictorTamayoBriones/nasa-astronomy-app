import { useEffect, useState } from "react"
import { IApodModel } from "../../models/ApodModel";
import { getAPOD } from "../../service/getAPOD"
import { ApodContainer } from "./styled-components/ApodContainer";
import { ApodData } from "./styled-components/ApodData";
import { ApodImage, ApodImageContainer } from "./styled-components/ApodImage";

function Apod() {

  const [Apod, setApod]=useState<IApodModel>({
    copyright: '',
    date: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: ''
  });


  const getApodData = async ()=> setApod(await getAPOD());

  useEffect(()=>{
    getApodData();
  }, [])
  return (
    <ApodContainer>
      <ApodImageContainer>
        <ApodImage src={Apod.url} alt={Apod.title} />
      </ApodImageContainer>
      <ApodData>
        <h2>{Apod.title}</h2>
        <span>{Apod.copyright} - {Apod.date}</span>
        <p>{Apod.explanation}</p>
      </ApodData>
    </ApodContainer>
  )
}
export default Apod