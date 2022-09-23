import { Description, GridItem, GridItemBody } from "../../styled-components/GridItem"

function ImageAndVideo() {
  return (
    <GridItem width="100" image="https://farm3.staticflickr.com/2460/3686365971_12107421e7_o_d.jpg" >
      <GridItemBody>
        <h2>Image And Video Library</h2>
        <Description>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo perspiciatis quisquam sequi reiciendis nulla facere ad provident voluptas aliquid!</p>
        </Description>
      </GridItemBody>
    </GridItem>
  )
}
export default ImageAndVideo