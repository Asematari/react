import ResetImg from "../../assets/forgot.png"
import React, { useState } from 'react'
import Styles from "./auth.module.scss"
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
import { auth } from "../../firebase/config"
import { toast } from "react-toastify"
import Loader from "../../components/loader/Loader"
import { sendPasswordResetEmail } from "firebase/auth"

const Reset = () => {

  const[email,setEmail] = useState("")
  const[isLoading,setIsLoading] = useState(false)


    const resetPassword =(e)=>{
      e.preventDefault()
      setIsLoading (true)

      sendPasswordResetEmail(auth, email)
        .then(() => {
          setIsLoading (false)
          toast.success("ResetPassword Successful")
      })
        .catch((error) => {
        setIsLoading (false)
      toast.error(error.message)
  });
    }


  return (
    <>
    {isLoading &&   <Loader/>}
    <section className= { ` container ${Styles.auth}`}>
      <div className={Styles.img}>
        <img src={ResetImg} alt='Reset' width="400"/>
        </div>
    <Card>
        <div className={Styles.form}>
            <h2>Reset Password</h2>
    <form  onSubmit={resetPassword}>
        <input type='text' placeholder='Email' required
        value={email} 
        onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit" className='--btn --btn-primary --btn-block'>Reset Password</button>
            <div className={Styles.links}>
                <p>
                <Link to="/login"> -Login</Link>
                </p>
                <p>
                <Link to="/register"> -Register</Link>
                </p>
            </div>
            </form>
        </div>
        </Card>
        
    </section>
</>
  )
}
export default Reset