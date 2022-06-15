import React, {Fragment} from 'react'
import style from '../../../styles/Component/inputs/SearchbarProduct/SearchbarProduct.module.css'

const Input_text = (props) => {
  return (
    <div className={style.SearchBar_container}>
      
     <input className={style.SearchBar_item} type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default Input_text