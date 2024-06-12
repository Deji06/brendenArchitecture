import './App.css'
import './index.css'
import 'tailwindcss/tailwind.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
// import Navbar from './Navbar';
import AboutUs from './pages/AboutUs'
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='contact-us' element={<Contact />} />
        <Route path='service' element={<Services />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>      
  )
}

export default App
