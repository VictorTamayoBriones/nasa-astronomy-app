import { ImageBanner } from './components/ImageBanner';
import { UlRoutes } from './components/UlRoutes';
import { NavigationBar } from './styled-components/Navigation';

function Navbar() {
  return (
    <NavigationBar>
      <ImageBanner/>
      <UlRoutes/>
    </NavigationBar>
  )
}
export default Navbar