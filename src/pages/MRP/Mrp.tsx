import { useEffect, useState } from "react"
import { getMRP } from "../../service/getMRP";
import { CardPhoto } from "./components";
import { MrpContainer } from "./styled-components/MrpContainer";

function Mrp() {

  const[roverPhotos, setRoverPhotos]=useState([]);

  const getRoverPhotos = async (page:number) => setRoverPhotos(await getMRP(page))

  useEffect(()=>{
    getRoverPhotos(1);  
  }, [])

  return (
    <MrpContainer>
      {roverPhotos?.map( (roverPhotoData, i) =>(
        <CardPhoto key={`rover-photo-${i}`} photoData={roverPhotoData} />
      ))}
    </MrpContainer>
  )
}
export default Mrp