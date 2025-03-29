import './index.css'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import { Protofolio } from './pages/Protofolio'
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Foteer } from './components/Foteer';
import { BackToTopButton } from './components/BackToTopButton';

function App() {
  const [isMode ,setIsMode]=useState(false);

  const getData=(data)=>{
    setIsMode(!data)
    console.log(data)
    
  }
  console.log("ismode",isMode)

  
 
  

  return (
    <div className={isMode ?"bg-white selection:bg-purple-500":"bg-slate-900 selection:bg-purple-500"}>
      
      <BrowserRouter>
      <Navbar GetDataValue={getData} />

      <Routes>
        <Route path='/'  element={<Protofolio  props={isMode}/>} />
      </Routes>
      <Foteer props={isMode} />
      <BackToTopButton props={isMode} />
      
      </BrowserRouter>
    </div>
  )
}

export default App
