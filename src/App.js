import Navbar from './components/Navbar';
import './css/index.css'
import Blog from './components/Blog'
import Contacto from './components/Contacto';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Index from './components/Index';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div>
        <Routes>
          <Route path="/" element = {<Index />} />
          <Route path="/Blog" element = {<Blog />} />
          <Route path="/Contacto" element={<Contacto />}/>
        </Routes>
    </div> 
  </BrowserRouter>
    
  );
}

export default App;
