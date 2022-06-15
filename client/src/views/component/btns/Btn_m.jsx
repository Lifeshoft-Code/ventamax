import React from 'react'
import btnStyle from '../../../styles/Component/btns/btn.module.css';

const Btn_m = (props) => {
  return (
    <div>
     <button onClick={props.event}> {props.btnName}</button>
    </div>
  )
}

export default Btn_m