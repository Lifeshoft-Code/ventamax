import React from 'react'
import { useState } from 'react'
import FacturaStyle from '../../../styles/Component/FacturaControl/FacturaControl.module.css'
const FacturaControl = (props) => {
  const [products, setProducts] = useState([

    {
      nombre: 'Cerveza Tecate',
      costo: 'USD$' + 18.49,
      precio: 'USD$' + 27.00,
      descripcion: 'Cerveza Tecate',
      stock: 67,
      medida: 200 + 'ml',
      codigo: 3456,
      Categoria: 'Bebidas'


    },
    {
      nombre: 'Cerveza Bohemia',
      costo: 'USD$' + 18.49,
      precio: 'USD$' + 27.00,
      descripcion: 'Cerveza Tecate',
      stock: 46,
      medida: 200 + 'ml',
      codigo: 5431,
      Categoria: 'Bebidas'


    },
    {
      nombre: 'Tequila blanco Silver Diligencias',
      costo: 'USD$' + 156.49,
      precio: 'USD$' + 27.00,
      descripcion: 'Cerveza Tecate',
      stock: 29,
      medida: 200 + 'ml',
      codigo: 8131,
      Categoria: 'Bebidas'


    },

  ])

  return (
    <section className={props.class}>
      <div>
        <input type="text" placeholder='Buscar Usuario' />
        <button>Agregar Usuario</button>
      </div>
      <ul>
        {products.map((product) => (
          <li className={FacturaStyle.Container}>
            <div>Nombre: {product.nombre}</div>

            <div>Precio: {product.precio}</div>
            <br />
          </li>

        ))}
      </ul>
    </section>
  )
}

export default FacturaControl