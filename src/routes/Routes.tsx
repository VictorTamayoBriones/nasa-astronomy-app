import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoutes } from '../models';
import { Apod, Home, ImageAndVideo, Mrp } from '../pages';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to={ PublicRoutes.HOME } />} />
        <Route path={ PublicRoutes.HOME } element={<Home/>} />
        <Route path={ PublicRoutes.APOD } element={<Apod/>} />
        <Route path={ PublicRoutes.MRP } element={<Mrp/>} />
        <Route path={ PublicRoutes.IMAGEANDVIDEO } element={<ImageAndVideo/>} />
        <Route element={<p>404 not found</p>} />
    </Routes>
  )
}
export default AppRoutes