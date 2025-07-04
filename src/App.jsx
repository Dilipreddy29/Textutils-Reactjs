
import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <Navbar  title={"TextUtils"} button={"Search"}/>
    <Routes>
      <Route path="/" element={<Textform />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
    
     
  
    
    </>
  )
};

export default App
