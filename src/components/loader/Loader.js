import loaderImg from "../../assets/loader.gif"
import Styles from "./Loader.module.scss"
import ReactDOM from 'react-dom'

const Loader = () => {
  return ReactDOM.createPortal (
    <div className={Styles.wrapper}>
        <div className={Styles.loader}>
            <img src={loaderImg} alt='Loading...' />
        </div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader