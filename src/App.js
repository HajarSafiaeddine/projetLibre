

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Bitcoin from './Pages/Bitcoin/Bitcoin';
import CoinItem from './Components/Coins/details';


function App() {
  return (
    <BrowserRouter>

   <Routes>
   <Route path="/Home" element={<Home />} />
   <Route path="/Bitcoin" element={<Bitcoin />} />
   <Route path='/coin' element={<CoinItem />}>
          <Route path=':coinId' element={<details />} />
    </Route>
   <Route path="/*" element={<Home />} />
   </Routes>
  
   </BrowserRouter>
  );
}

export default App;
