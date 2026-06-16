import './components.css'
import { WideBtn } from './wideBtn'
import { AddItem } from './addItem'
import { Item } from './item'


export const InfoCollector = ({doctype="invoice"})=>{
    return(
        <>
            <div className="infoBody">
                <h2 className='infoTitle'>{doctype==='receipt' ? "Receipt": "Invoice"}</h2>
                <h3 className='cd'>Customer Details</h3>
                <div className="customerinfo">
                    <div className="input-group">
                        <label htmlFor="name">
                            Name: 
                        </label>
                        <input type="text" id='name' placeholder='eg. John Doe'/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">
                            Phone: 
                        </label>
                        <input type="number" id='phone' placeholder='eg. 0700 000 000'/>
                    </div>
                </div>
                {doctype==='invoice' ? 
                    <div className="input-group">
                        <label htmlFor="address">
                            Address (Optional): 
                        </label>
                        <input type="text" id='address' placeholder='e.g 14 Sadi Road, South B'/>
                    </div>:<></>
                }

                <h3>Items</h3>
                <Item position={1}/>
                <AddItem/>


                    <WideBtn label={
                        doctype==='invoice'
                         ? "Generate invoice only"
                         : "Generate receipt only"}
                         type={'cold'}
                         extraClass='infopage'/>

                    <WideBtn label={
                        doctype==='invoice'
                         ? "Generate invoice with receipt"
                         : "Generate receipt with invoice"}
                         type={'hot'}
                         extraClass='infopage'/>
            </div>
        </>
    )
}