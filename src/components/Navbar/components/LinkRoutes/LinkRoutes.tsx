import { Link, NavLink } from "react-router-dom"
import { PublicRoutes } from "../../../../models"

function UlRoutes() {
  return (
    <ul>
      <li><NavLink className={ ({isActive})=> isActive ? 'active' : undefined } to={ PublicRoutes.HOME } >Inicio</NavLink></li>
      <li><NavLink className={ ({isActive})=> isActive ? 'active' : undefined } to={ PublicRoutes.APOD } >APOD</NavLink></li>
      <li><NavLink className={ ({isActive})=> isActive ? 'active' : undefined } to={ PublicRoutes.MRP } >MRP</NavLink></li>
      <li><NavLink className={ ({isActive})=> isActive ? 'active' : undefined } to={ PublicRoutes.IMAGEANDVIDEO } >Image and Video Library</NavLink></li>
    </ul>
  )
}
export default UlRoutes