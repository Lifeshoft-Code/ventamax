import React from 'react'
import { Link } from 'react-router-dom'
import HomeStyle from '../../../styles/pages/Home/Home.module.css'


const Home = () => {
  return (
    <div className={HomeStyle.WelcomeSection_Container}>
      <div className={HomeStyle.WelcomeSection_Inner}>
        <h2 className={HomeStyle.WelcomeSection_Title}>¡Bienvenido de nuevo!</h2>
        <ul className={HomeStyle.WelcomeSection_Items}>



          <li className={HomeStyle.WelcomeSection_Item}>
            <Link className={HomeStyle.WelcomeSection_Item_Link} to='/venta'>Venta</Link>
          </li>
          <li className={HomeStyle.WelcomeSection_Item}>
            <Link className={HomeStyle.WelcomeSection_Item_Link} to='/compra'>Compra</Link>
          </li>
          <li className={HomeStyle.WelcomeSection_Item}>
            <Link className={HomeStyle.WelcomeSection_Item_Link} to='/registro'>Registro de ventas</Link>
          </li>
          <li className={HomeStyle.WelcomeSection_Item}>
            <Link className={HomeStyle.WelcomeSection_Item_Link} to='/inventario'>Inventario</Link>
          </li>

        </ul>

      </div>


    </div>
  )
}

export default Home