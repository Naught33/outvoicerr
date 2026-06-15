import './components.css'


export const WideBtn = ({label, type, extraClass = ''})=>{
    return(
        <button className={`wide-btn ${type} ${extraClass}`}>
            {label}
        </button>
    )
}