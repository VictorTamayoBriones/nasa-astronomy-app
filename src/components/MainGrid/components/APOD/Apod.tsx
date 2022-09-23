import { Description, GridItem, GridItemBody } from "../../styled-components/GridItem"

function Apod() {
  return (
    <GridItem width="50" image="https://api.nasa.gov/assets/img/general/apod.jpg">
      <GridItemBody>
        <h2>APOD</h2>
        <Description>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo perspiciatis quisquam sequi reiciendis nulla facere ad provident voluptas aliquid!</p>
        </Description>
      </GridItemBody>
    </GridItem>
  )
}
export default Apod