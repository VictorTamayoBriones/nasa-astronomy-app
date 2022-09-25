import { Card } from "./styled-components/Card"
import { CardBody } from "./styled-components/CardBody"
import { CardImage } from "./styled-components/CardImage"

interface Props{
    photoData: {
      img_src: string
      earth_date: string,
      rover:{
        name: string,
        status: string,
        launch_date: string,
        landing_date: string
      },
      camera:{
        full_name: string,
        name: string
      }
    },
}

function CardPhoto({photoData}:Props) {
  
  return (
    <Card>
      <CardImage src={photoData.img_src} />
      <CardBody>
        <span>{photoData.earth_date}</span>
        <p>photo by rover {photoData.rover.name} with the camera {`${photoData.camera.full_name}(${photoData.camera.name})`}</p>
        <p>Rover data:</p>
        <p>status: {photoData.rover.status} </p>
        <p>launch date: {photoData.rover.launch_date} </p>
        <p>landing date: {photoData.rover.landing_date} </p>
      </CardBody>
    </Card>
  )
}
export default CardPhoto