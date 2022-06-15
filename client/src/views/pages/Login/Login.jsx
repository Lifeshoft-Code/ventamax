import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../component/btns/Btn_m'
import LoginStyle from '../../../styles/pages/Login/Login.module.css'
const Login = () => {
   const navigate = useNavigate()
   const [UserName, setUserName] = useState('')
   const [UserPass, setUserPass] = useState('')
   
   const user = {
      UserName: 'Jonathan',
      UserPass: '1234'
   }

   const SavingUser = {
      UserName: UserName,
      UserPass: UserPass
   }
   const CheckingUser = (e)=> {
      e.preventDefault()
      if(SavingUser.UserName == user.UserName && SavingUser.UserPass == user.UserPass){
         navigate('/venta')
      }
   }

   console.log(user)

   
   


   return (
      <div className={LoginStyle.Container_app}>
         <section className={LoginStyle.Login_Wrapper}>

            <div className={LoginStyle.Login_header}>
               <div className={LoginStyle.WebName}>
                  <span>VentaMAX</span>

               </div>
               
               <span className={LoginStyle.Title}>Acceder</span>
            </div>
            <div className={LoginStyle.LoginControl_Container}>

               <form action="" className={LoginStyle.FormControl}>
                  <div className={LoginStyle.FormItemGroup}>
                     <label htmlFor="" className={LoginStyle.FormLabel}>Usuario:</label>

                     <input 
                     className={LoginStyle.FormInput} 
                     type="text"
                     onChange={(e)=>setUserName(e.target.value)}
                      />
                  </div>

                  <div className={LoginStyle.FormItemGroup}>
                     <label
                        className={LoginStyle.FormLabel}
                        htmlFor=""
                        >
                        Contraseña:
                     </label>

                     <input 
                     className={LoginStyle.FormInput} 
                     type="text"
                     onChange={(e)=>setUserPass(e.target.value)} />

                     <Link  className={LoginStyle.FormForgetPasswordInput} to='/'>¿Olvidaste la Contraseña?</Link>
                  </div >

                  <div>
                     <Button btnName='Entrar' event={CheckingUser}></Button>
                  </div>


               </form>
            </div>

         </section>
      </div>
   )
}

export default Login