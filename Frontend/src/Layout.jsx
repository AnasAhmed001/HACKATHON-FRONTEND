import { Outlet } from 'react-router-dom'
import Navbar from './components/ui/Navbar'



function Layout() {
  return (
    <> 
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Layout
