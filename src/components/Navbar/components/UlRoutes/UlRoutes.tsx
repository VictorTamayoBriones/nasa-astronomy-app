import { Link } from "react-router-dom"
import { PublicRoutes } from "../../../../models"

function UlRoutes() {
  return (
    <ul>
      <li><Link to={ PublicRoutes.HOME } >Inicio</Link></li>
      <li><Link to={ PublicRoutes.APOD } >APOD</Link></li>
      <li><Link to={ PublicRoutes.MRP } >MRP</Link></li>
      <li><Link to={ PublicRoutes.IMAGEANDVIDEO } >Image and Video Library</Link></li>
    </ul>
  )
}
export default UlRoutes