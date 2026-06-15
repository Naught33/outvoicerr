import './components.css'
import { WideBtn } from './wideBtn'

export const SignIn = ()=>{
    return(
    <>
        <form action="">
            <div className="form-group">
                <label htmlFor="lemail">Email: </label>
                <input type="email" id='lemail' placeholder='example: email@gmail.com'/>
            </div>

            <div className="form-group">
                <label htmlFor="lpassword">Password: </label>
                <input type="password" id='lpassword'/>
            </div>

        <WideBtn label={"Sign In"} type={"hot"}/>
        <p>Don't have an account? <span className='focus'>Sign Up</span></p>
        </form>
    </>
)
}