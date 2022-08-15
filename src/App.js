import Home from './asstes/Pages/Home';
import './index.css'
import "./css/App.css"
import { Routes, Route } from "react-router-dom";
import Details from './asstes/Pages/Details';

function App() {
  return (
    <div className='bg-blue-600'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
