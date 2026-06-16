import './components.css'
import { IconButton } from "./iconButton"
import { TabNav } from './tabNav'
import { FiSettings } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

export const Header = ()=>{
    const settingIcon = <FiSettings size={24}/>
    const menuIcon = <FiMenu size={24}/>
    return (
    <>
        <div className="header">
            <IconButton icon={settingIcon}/>
            <TabNav/>
            <IconButton icon={menuIcon}/>
        </div>
    </>
)
}