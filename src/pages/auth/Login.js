import {useState} from 'react'
import Styles from "./auth.module.scss"
import loginImg from "../../assets/login.png"
import { Link ,useNavigate} from 'react-router-dom'
import {FaGoogle} from "react-icons/fa"
import Card from '../../components/card/Card'
import {  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/config'
import { toast, ToastContainer } from 'react-toastify'
import Loader from "../../components/loader/Loader"


const Login = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[isLoading,setIsLoading] = useState(false)

    const navigate = useNavigate ()

    const loginUser = (e) =>{
        e.preventDefault();
        setIsLoading (true)
        toast.success("Login successful")
        navigate("/")
        signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    setIsLoading(false)
    })
  .catch((error) => {
    setIsLoading(false)
    toast.error(error.message)
  });
    } 
    //sign with Google
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            toast.success("Login Successfully")
            navigate("/")
        }).catch((error) => {
            toast.error(error.message)
        });
    }


  return(
  <>
    <ToastContainer />
    {isLoading && <Loader />}
  <section className= { ` container ${Styles.auth}`}>
    <div className={Styles.img}>
        <img src={loginImg} alt='loginImg' width="400"/>
    </div>
    <Card>
        <div className={Styles.form}>
            <h2>Login</h2>
    <form onSubmit={loginUser}>
        <input type='text' placeholder='Email' required
        value={email} 
        onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' required
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
            <div className={Styles.links}>
                <Link to="/reset"> Reset Password </Link>
            </div>
                <p> -- or --</p>
    </form>
        <button className='--btn --btn-danger --btn-block' onClick={signInWithGoogle}><FaGoogle color= "#fff" /> Login With Google</button>
            <span className={Styles.register}>
                <p>Don`t have an account?</p>
                <Link to="/register"> Register</Link>
            </span>
        </div>
        </Card>
    </section>
    </>
)
  }
export default Login