import './components.css'


export const BottomSelector=()=>{
    return(
        <>
            <div className="selector">
                <div className="docCat doctype">
                    <span className='selected'>Sales</span>
                    <span>Services</span>
                    <span>BnB</span>
                </div>

                <div className="line"></div>

                <div className="doctype">
                    <span className='selected'>Invoice</span>
                    <span>Receipt</span>
                </div>
            </div>
        </>
    )
}