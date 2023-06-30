import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Contacto from './routes/Contacto'
import Fav from './routes/Fav'
import Header from './componentes/Header'
import ElementosGlobalesProvider from './context/ElementosGlobales'
import DoctorId from './routes/DoctorId'

function App() {
  return (
    <>
      <ElementosGlobalesProvider>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/Fav' element={<Fav />} />
            <Route path='/Medic/:id' element={<DoctorId />}/>
          </Routes>
        </main>
      </ElementosGlobalesProvider>
    </>
  )
}

export default App