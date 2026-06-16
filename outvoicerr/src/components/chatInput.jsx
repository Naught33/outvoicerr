import './components.css'
import { IconButton } from './iconButton'
import { FiSend } from "react-icons/fi";
import { FiFilePlus } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";


export const ChatInput=()=>{
    const sendIcon = <FiSend size={24}/>
    return (<>
    
        <div className="chatparent">
            <div className="chatutils">
                <input type="text" placeholder='describe your invoice...'/>
                <FiCamera size={24}/>
                <FiFilePlus size={24}/>
            </div>
            <IconButton icon={sendIcon}/>
        </div>
    
    </>)
}

