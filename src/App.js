import BedRoom from './asstes/Pages/BedRoom';
import Home from './asstes/Pages/Home';
import './index.css'
import "./css/App.css"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>

        <div className='bg-blue-600 w-[375px]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home/Bedroom" element={<BedRoom />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
