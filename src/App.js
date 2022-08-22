import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Bitcoin from './Pages/Bitcoin/Bitcoin';


function App() {
  return (
    <BrowserRouter>
   <Navbar />
   <Routes>
   <Route path="/Home" element={<Home />} />
   <Route path="/Bitcoin" element={<Bitcoin />} />
   <Route path="/*" element={<Home />} />
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
