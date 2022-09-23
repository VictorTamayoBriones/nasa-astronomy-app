import Logo from '../../assets/images/logo.png';
import { NavigationBar } from './styled-components/Navigation';

function Navbar() {
  return (
    <NavigationBar>

      <section>
        <img src={Logo} alt="NASA Logo" />
        <h2>By {'{Open APIs}'}</h2>
      </section>

      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">APOD</a></li>
      </ul>
    </NavigationBar>
  )
}
export default Navbar