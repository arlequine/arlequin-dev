import './App.css'
import Navbar from './components/Nabvar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
