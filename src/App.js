
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
 import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dsapage from './components/Dsapage';
import Array from './components/Array';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  const [mode,setMode] = useState('black');
  const [alert,setAlert] =useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)

    },1500);
  }
  const toggleMode = ()=>{
    if(mode==='black' ){
      setMode('white')
      
      document.body.style.backgroundColor='black';
     
      showAlert("Dark Mode Has Been Enable","Success");
    }
    else{
      setMode('black')
 
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enable","Success");
    }
  }
 
  return (
    
     <>
     
     < Navbar toggleMode={toggleMode}/>
     <Alert alert={alert}/> 
    <Routes>
          
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/dsa' element={<Dsapage/>}/>
      <Route exact path='/about' element={<About />}/>
      <Route exact path='/dsa/array' element={<Array/>}/>
      
          
       </Routes>  
       <Footer/>
       
      
      
      
      
       
       
   
      </>
  
  );
}

export default App;
