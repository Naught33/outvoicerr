import './components.css'
import { banks } from '../constants/banks'

export const PaymentType = ({type='bank'})=>{
    switch (type){
        case 'bank':
        return (
            <>
        <div className="info">
            <div className="input-group">
                <label htmlFor="bank">Bank: </label>
                <select name="bank" id="bank">
                    {banks.map((bank) => (
                        <option key={bank.value} value={bank.value}>
                        {bank.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="input-group">
                <label htmlFor="account">Account No.:</label>
                <input type="text" placeholder='account number' id='account'/>
            </div>
        </div>
    </>
    )
    case 'paybill':
        return (
        <>
        <div className="info">
            <div className="input-group">
                    <label htmlFor="paybill">Paybill No.: </label>
                    <input type="number" id='paybill' placeholder='eg 247247'/>
                </div>

                <div className="input-group">
                    <label htmlFor="account">Account No.:</label>
                    <input type="text" placeholder='account number' id='account'/>
                </div>
            </div>     
        </>)

        case 'pochi':
            return (
        <>
        <div className="info">
            <div className="input-group">
                    <label htmlFor="phone">Phone No.: </label>
                    <input type="number" id='phone' placeholder='eg 0700 000 000'/>
                </div>
            </div>     
        </>)
        case 'till':
            return (
        <>
        <div className="info">
            <div className="input-group">
                    <label htmlFor="till">Till No.: </label>
                    <input type="number" id='till' placeholder='eg 4138892'/>
                </div>
            </div>     
        </>)

        case 'send':
            return (
        <>
        <div className="info">
            <div className="input-group">
                    <label htmlFor="phone">Phone No.: </label>
                    <input type="number" id='phone' placeholder='eg 0700 000 000'/>
                </div>
            </div>     
        </>)
    }
}