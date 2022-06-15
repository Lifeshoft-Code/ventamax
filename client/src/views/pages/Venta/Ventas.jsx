import React, { Fragment } from 'react'
//import component
import Menu from '../../templates/Menu/Menu'
import ControlSearchProduct from '../../component/ControlSearchProduct/ControlSearchProduct'
import MultiDisplayControl from '../../component/Multi_display_control/Multi_display_control'
import FacturaControl from '../../component/FacturaControl/FacturaControl'
//import style
import VentaStyle from '../../../styles/pages/Venta/Venta.module.css'



const Ventas = () => {
  return (

    <Fragment>
    
      <Menu></Menu>
      <main className={VentaStyle.AppContainer}>
        
        <MultiDisplayControl></MultiDisplayControl>
        <ControlSearchProduct className={VentaStyle.Product_Control_Container}>
            
        </ControlSearchProduct>
        <FacturaControl class={VentaStyle.Factura_Control_Container}></FacturaControl>
      
      </main>
      
    </Fragment>
  )
}

export default Ventas