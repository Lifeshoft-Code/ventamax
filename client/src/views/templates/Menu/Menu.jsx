import React, { useState } from 'react'
import MenuStyle from '../../../styles/Template/Menu/Menu.module.css'
import {Link, NavLink} from 'react-router-dom'
import accountIcon from '../../../assets/usuario.svg'

const Menu = () => {
  const [clickBtnMenu, setClickBtnMenu] = useState(false)
  const handledClickMenuBtn = (e)=>{
    e.preventDefault();
    setClickBtnMenu(!clickBtnMenu)
  }
  document.querySelector('cl')
  let userName = 'Pablo'
  return (
    <div className={MenuStyle.Container}>
      <div className={MenuStyle.MenuBtn} onClick={handledClickMenuBtn}>
        <div className={!clickBtnMenu ? MenuStyle.MenuBtn_icon : MenuStyle.MenuBtn_icon + ' ' + MenuStyle.MenuBtn_icon_closed}></div>
      </div>
      <div className={MenuStyle.WebName}>
        <span className={MenuStyle.WebName_item}>VentaMAX</span>
      </div>
      <div className={MenuStyle.Account}>
        <span className={MenuStyle.UserName}>{userName}</span>
        <div className={MenuStyle.AccountIcon_container}>
          <img className={MenuStyle.AccountIcon} src={accountIcon} alt="" />
        </div>

      </div>
      <nav className={!clickBtnMenu ? MenuStyle.Menu + ' ' + MenuStyle.Disabled : MenuStyle.Menu }>
          <ul className={MenuStyle.Menu_links_group}>
          <li className={MenuStyle.Menu_link_container}>
              <NavLink className={({isActive})=>(isActive ? MenuStyle.Menu_link + ' ' + MenuStyle.Active : MenuStyle.Menu_link)} to='/'>Home</NavLink>
            </li>
            <li className={MenuStyle.Menu_link_container}>
              <NavLink className={({isActive})=>(isActive ? MenuStyle.Menu_link + ' ' + MenuStyle.Active : MenuStyle.Menu_link)} to='/login'>Login</NavLink>
            </li>
            <li className={MenuStyle.Menu_link_container}>
              <NavLink className={({isActive})=>(isActive ? MenuStyle.Menu_link + ' ' + MenuStyle.Active : MenuStyle.Menu_link)} to='/venta'>Venta</NavLink>
            </li>
            <li className={MenuStyle.Menu_link_container}>
              <NavLink className={({isActive})=>(isActive ? MenuStyle.Menu_link + ' ' + MenuStyle.Active : MenuStyle.Menu_link)} to='/compra'>Compra</NavLink>
            </li>
            <li className={MenuStyle.Menu_link_container}>
              <NavLink className={({isActive})=>(isActive ? MenuStyle.Menu_link + ' ' + MenuStyle.Active : MenuStyle.Menu_link)} to='/registro'>Registros de pedidos</NavLink>
            </li>
            <li className={MenuStyle.Menu_link_container}>
              <NavLink className={({isActive})=>(isActive ? MenuStyle.Menu_link + ' ' + MenuStyle.Active : MenuStyle.Menu_link)} to='/inventario'>Inventario</NavLink>
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default Menu