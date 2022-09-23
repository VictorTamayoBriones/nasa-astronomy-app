import { IconMenu2 } from '@tabler/icons';
import { IconX } from '@tabler/icons';
import { useState } from 'react';
import { ImageBanner } from './components/ImageBanner';
import { UlRoutes } from './components/UlRoutes';
import { NavigationBar } from './styled-components/Navigation';

function Navbar() {

  const [menuIsOpen, setMenuIsOpen]=useState(false);

  return (
    <NavigationBar menuIsOpen={menuIsOpen} >
      <ImageBanner/>
      {
        menuIsOpen ? <IconX onClick={()=>setMenuIsOpen(false)} /> : <IconMenu2 onClick={()=>setMenuIsOpen(true)} />
      }
      
      <UlRoutes/>
    </NavigationBar>
  )
}
export default Navbar