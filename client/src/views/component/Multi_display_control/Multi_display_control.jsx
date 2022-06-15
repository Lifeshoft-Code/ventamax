import React, { useState } from 'react'
import MultiDisplayControlStyle from '../../../styles/Component/MultiDisplayControl/MultiDisplayControl.module.css'


const Multi_display_control = () => {

  // numero de pantallas
  const [list, setList] = useState([1])
 
  const upgradeList = (e) => {
    e.preventDefault()
    //Ultimo elemento 
    const lastItem = list.at(-1);
    //condicion para dejar de añadir siempre y cuando este por debajo de 5
    if (lastItem < 5) {
      const newItem = lastItem + 1;

      setList([...list, newItem])

    }

    console.log(list)
  }


  return (

    <div className={MultiDisplayControlStyle.Container}>
     
       <ul className={MultiDisplayControlStyle.Items}>
        {

          list.map((item, index) =>
          <div>
            <li key={index} className={MultiDisplayControlStyle.Item}>{item}</li>
          </div>
            
          )
        }
        <button onClick={upgradeList} className={MultiDisplayControlStyle.Item + ' ' + MultiDisplayControlStyle.AddBtn}>+</button>
      </ul>
      

    </div>
  )
}

export default Multi_display_control
