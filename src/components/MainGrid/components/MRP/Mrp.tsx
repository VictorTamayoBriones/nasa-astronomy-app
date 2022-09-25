import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../../../models";
import { Description, GridItem, GridItemBody } from "../../styled-components/GridItem"

function Mrp() {

  const navigate = useNavigate();

  return (
    <GridItem width="50" image="https://nypost.com/wp-content/uploads/sites/2/2021/03/SPACE-EXPLORATION_MARS.jpg?quality=90&strip=all&w=1200" onClick={()=>navigate(PublicRoutes.MRP)} >
      <GridItemBody>
        <h2>MRP</h2>
        <Description>
          <p>Mars Rover Photos. <br /> Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars.</p>
        </Description>
      </GridItemBody>
    </GridItem>
  )
}
export default Mrp