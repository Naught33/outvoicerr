import logoUrl from '../assets/logo.png'
import styles from './auth.module.css'
import { SignIn } from '../components/signin'
import { SignUp } from '../components/signup'

export default function Auth(){
    return(
    <>
    <div className={styles.auth}>
        <img src={logoUrl} alt="outvoicerr logo image" className={styles.logo}/>
        <SignUp/>
        <p className={styles.tandcs}> <span>Terms of Service</span> | <span>Privacy Policy</span></p>
    </div>
    </>
    )
}