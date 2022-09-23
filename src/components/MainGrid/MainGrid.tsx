import { Apod } from "./components/APOD"
import { ImageAndVideo } from "./components/ImageAndVideo"
import { Mrp } from "./components/MRP"
import { Grid, MainGridContainer } from "./styled-components"

function MainGrid() {
  return (
    <MainGridContainer>
      <Grid>
        <Apod/>
        <Mrp/>
        <ImageAndVideo/>
      </Grid>
    </MainGridContainer>
  )
}
export default MainGrid