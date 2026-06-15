import logo from '../assets/logo_notext.png'
import styles from './onboarding.module.css'
import { WideBtn } from '../components/wideBtn'
import { PaymentType } from '../components/paymentType'

export const Onboarding = ()=>{
    return (
    <>
        <img src={logo} alt="outvoicerr logo" className={styles.logo}/>
        <h1>Welcome!</h1>
        <p>
            Thank you for signing up with OutVoicerr! We are glad to have you here. Whet’s next?
        </p>
        <p>
            Enter your business details below to get started!
        </p>

        <p>
            <i>
                *If you don’t have a business name, you can use your name instead. You can also leave the logo empty!
            </i>
        </p>
        <div className={styles.inputGroup}>
            <label htmlFor="businessname">Business Name: </label>
            <input type="text" placeholder='e.g Kilimani Dresses' id='businessname'/>
        </div>
        <div className={styles.inputGroup}>
            <label htmlFor="businessaddress">Business Address: </label>
            <input type="text" placeholder='e.g Royal Suites, Sadi Road, South B' id='businessaddress'/>
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="logo">Business Logo (Optional): </label>
            <input type="file" id='logo' className={styles.borderless}/>
        </div>

        <h2>Business Contacts</h2>
        <div className={styles.inputGroup}>
            <label htmlFor="businessphone">Business Phone: </label>
            <input type="number" placeholder='e.g 0790 000 000' id='businessphone'/>
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="businessemail">Business Email: </label>
            <input type="email" placeholder='example: email@gmail.com' id='businessemail'/>
        </div>
        <h2>Payment Information</h2>
        <div className={styles.paymentType}>
            <span className={styles.selected}>Bank</span>
            <span>Paybill</span>
            <span>Till</span>
            <span>Pochi La Biashara</span>
            <span>Send Money</span>
        </div>

        <PaymentType type='bank'/>
        <WideBtn label={"Let's Get Started!"} type={'hot'} extraClass='fit-screen'/>

    </>
    )
}