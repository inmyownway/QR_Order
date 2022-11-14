import { Reset } from "styled-reset";
import './assets/font.css'
import Header from "./components/common/Header";
import GnbLayout from "./components/common/GnbLayout"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Reset />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/user' element={<GnbLayout />}>


          </Route>
        </Routes>
      </BrowserRouter>


    </div >)
}

export default App;
