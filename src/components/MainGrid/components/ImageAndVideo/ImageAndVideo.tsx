import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../../../models";
import { Description, GridItem, GridItemBody } from "../../styled-components/GridItem"

function ImageAndVideo() {

  const navigate = useNavigate();

  return (
    <GridItem width="100" image="https://farm3.staticflickr.com/2460/3686365971_12107421e7_o_d.jpg" onClick={()=>navigate(PublicRoutes.IMAGEANDVIDEO)} >
      <GridItemBody>
        <h2>Image And Video Library</h2>
        <Description>
          <p>NASA Image and Video Library <br /> Here you will can see a lot of images and videos of NASA thanks to NASA Open APIs.</p>
        </Description>
      </GridItemBody>
    </GridItem>
  )
}
export default ImageAndVideo