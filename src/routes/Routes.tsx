import { Route, Routes } from 'react-router-dom';
import { Apod, Home, ImageAndVideo, Mrp } from '../pages';

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/apod' element={<Apod/>} />
        <Route path='/mrp' element={<Mrp/>} />
        <Route path='/image-and-video' element={<ImageAndVideo/>} />
        <Route element={<p>404 not found</p>} />
    </Routes>
  )
}
export default AppRoutes