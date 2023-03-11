import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dsapage from './components/Dsapage';
import Array from './components/Array';

function App() {
  return (
   <>
   < Navbar />
    <Routes>
          
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/dsa' element={<Dsapage/>}/>
      <Route exact path='/dsa/array' element={<Array/>}/>
      
    
          
       </Routes>
       
   </>
  );
}

export default App;
