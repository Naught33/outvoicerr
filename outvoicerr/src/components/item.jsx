import './components.css'

export const Item = ({position})=>{
    return (
        <>
            <div className="item">
                <h3>Item {position}</h3>
            

            <div className="input-group">
                <label htmlFor="itemname">Name: </label>
                <input type="text" id='itemname' placeholder='e.g Gucci Dress'/>
            </div>

            <div className="input-group">
                <label htmlFor="description">Description (optional)</label>
                <textarea name="description" id="description" placeholder='i.e Grey in color, 50cm silver zipper...'></textarea>
            </div>

            <div className="linear">
                <div className="input-group">
                        <label htmlFor="price">
                            price per unit 
                        </label>
                        <input type="number" id='price' placeholder='eg. 5000'/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">
                            Quantity 
                        </label>
                        <input type="number" id='name' placeholder='eg. 10'/>
                    </div>
            </div>
            </div>
        </>
    )
}