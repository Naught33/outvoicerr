import './components.css'
import { FiCpu } from "react-icons/fi";

export const ChatBubble = ({type, content, user='user'})=>{


    return (<>
        <div className={`chatwrapper ${type}`}>
            <div className={`text ${type}`}>{content}</div>
            <div className={`user ${type}`}>{user==='AI'? <FiCpu/> : user.split('')[0]}</div>
        </div>        
    </>)
}