import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../../../models";
import { Description, GridItem, GridItemBody } from "../../styled-components/GridItem"

function Apod() {

  const navigate = useNavigate();

  return (
    <GridItem width="50" image="http://www.washingtonpost.com/rf/image_2048w/2010-2019/WashingtonPost/2014/07/15/Interactivity/Images/AstronomyPhotog01-IvanEder1405431301.jpg" onClick={()=>navigate(PublicRoutes.APOD)} >
      <GridItemBody>
        <h2>APOD</h2>
        <Description>
          <p>Astronomy Picture Of Day. <br /> Here you will can see the astronomy picture of day thanks to NASA APIS.</p>
        </Description>
      </GridItemBody>
    </GridItem>
  )
}
export default Apod