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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo perspiciatis quisquam sequi reiciendis nulla facere ad provident voluptas aliquid!</p>
        </Description>
      </GridItemBody>
    </GridItem>
  )
}
export default Mrp