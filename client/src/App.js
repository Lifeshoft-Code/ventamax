import React from 'react';

//importando componentes de react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//importacion de las paginas
import CompraPage from './views/pages/Compra/Compras';
import VentaPage from './views/pages/Venta/Ventas'
import InventarioPage from './views/pages/Inventario/Inventario'
import RegistroPage from './views/pages/Registros/Registro_de_ventas'
import HomePage from './views/pages/Home/Home'
import Login from './views/pages/Login/Login';
import NotFound from './views/pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/compra' element={<CompraPage></CompraPage>}></Route>
        <Route exact path='/venta' element={<VentaPage></VentaPage>}></Route>
        <Route exact path='/ventamax' element={<HomePage></HomePage>}></Route>
        <Route exact path='/inventario' element={<InventarioPage></InventarioPage>}></Route>
        <Route exact path='/registro' element={<RegistroPage></RegistroPage>}></Route>
        <Route exact path='/' element={<Login></Login>}></Route>
        <Route exact path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
