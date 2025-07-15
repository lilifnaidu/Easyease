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
import Camerasegemt from './Pages/CameraSegments/Camerasegemt';
import Catering from './Pages/Catering/Catering';

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
  <Route path='/functiontype' element={<Camerasegemt/>}/>
<Route path='/camera/:event' element={<Camera/>}/>
<Route path='/profile/:name' element={<Profileview/>}/>
<Route path='/Catering' element={<Catering/>}/>

</Routes>
</BrowserRouter>
</>
  )
}

export default App
