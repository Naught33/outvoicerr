import './components.css'
import { WideBtn } from './wideBtn'

export const SignUp = ()=>{
    return(
    <>
        <form action="">
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" id='email' placeholder='example: email@gmail.com'/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Create Password: </label>
                <input type="password" id='password'/>
            </div>

            <div className="form-group">
                <label htmlFor="cpassword">Create Password: </label>
                <input type="password" id='cpassword'/>
            </div>

            <div className="clause">
                <input type="checkbox" id='read'/>
                <span>
                    I have read and understood the terms of service and the privacy policy
                </span>
            </div>
        <WideBtn label={"Sign Up"} type={"hot"}/>
        <p>Already have an account? <span className='focus'>Log In</span></p>
        </form>
    </>
)
}