import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './componentes/navbar/Navbar'
import './index.css';
import Home from './paginas/home/Home';
import Footer from './componentes/footer/Footer';
import Contato from './paginas/contato/Contato';
import Sobre from './paginas/sobre/Sobre';
import Servico from './paginas/servico/Servico';

function App() {

  return (
    <>
      <BrowserRouter>
       < Navbar />
        <div className="min-h-[80vh] ">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servico" element={<Servico />} />


          </Routes>
        </div>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
