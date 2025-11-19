import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import RecetasListPage from './pages/RecetasListPage';
import RecetaDetallePage from './pages/RecetaDetallePage';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecetasListPage />} />
        <Route path="/recetas" element={<RecetasListPage />} />
        <Route path="/recetas/:id" element={<RecetaDetallePage />} />
      </Routes>
    </>
  )
}

export default App
