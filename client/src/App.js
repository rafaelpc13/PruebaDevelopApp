import './App.css';
import Login from './Components/Login';
import Productos from './Components/Productos';
import Categorias from './Components/Categorias';
import ProductosCategorias from './Components/ProductosCategorias';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProyectosProvider } from './context/ProductosProvider';
import RutaProtegida from './RutaProtegida';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProyectosProvider>
          <Routes>
            <Route path="/Productos" element={<RutaProtegida />}>
              <Route index element={<Productos />} />
              <Route path="Categorias" element={<Categorias />} />
            <Route path=":id" element={<ProductosCategorias />} />

            </Route>

            <Route path="/" element={<Login />} />
          </Routes>
        </ProyectosProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
