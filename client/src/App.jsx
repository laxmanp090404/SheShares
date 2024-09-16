
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Body from './Components/Body'
import { Outlet } from 'react-router-dom'
function App() {
 

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
