import styles from './dashboard.module.css'
import { Header } from '../components/header'
import { ChatInput } from '../components/chatInput'
import { ChatBody } from '../components/chatBody'
import { ChatNotifier } from '../components/chatNotifier'
import { InfoCollector } from '../components/infoCollector'

import { FiDownload } from "react-icons/fi";
import { FiRefreshCcw } from "react-icons/fi";
import { BottomSelector } from '../components/bottomSelector'

import { useState } from 'react'




export default function Home(){
    const [mode, setMode] = useState('manual')
    const icons = [
        {
            "name": "Download",
            "icon": <FiDownload size={24}/>
        },
        {
            "name": "Retry",
            "icon": <FiRefreshCcw/>
        }
    ]
    return (
        <>
            <Header/>
            <div className="mode">
                {mode==='ai' ?
                <>
                <ChatBody/>
                <ChatNotifier 
                    title={'Your document is ready!'}
                    description={'John Doe sales Invoice'}
                    icon={icons[0].icon}
                />
                <ChatInput/>
                </>: 
                <>
                    <InfoCollector/>
                    <BottomSelector/>
                </>
                }
            </div>
            
        </>
    )
}