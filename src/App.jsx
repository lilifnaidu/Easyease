import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Camera from './Pages/Camera/Camera';
import Ourvision from './Components/Ourvision/Ourvision';
import EventChoose from './Components/Eventease/EventChoose';
import FootinftheFooter from './Components/Footer/Footer';
import Profileview from './Pages/Profileviews/Profileview';

const App = () => {
  return (
<>

<BrowserRouter>
  <Navbar/>
<Routes>
  <Route
   path='/'
    element={
    <>

      <Header/>
      <Hero/>
      <Ourvision/>
      <EventChoose/>
      <FootinftheFooter/>

    </>
  }/>
<Route path='/camera' element={<Camera/>}/>
<Route path='/camera/:name' element={<Profileview/>}/>
</Routes>
</BrowserRouter>
</>
  )
}

export default App
