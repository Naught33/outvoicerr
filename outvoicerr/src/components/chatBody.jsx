import './components.css'
import { ChatBubble } from './chatBubble'

export const ChatBody = ()=>{
    const chatContent = `Hello,
        Make me an invoice for the following:
        2 balls, KES 2000 each
        9 Jerseys, Kes 2600 each
        Please make a receipt as well

        Client name is John Doe and the phone number is 0728 000 000, no address`

    const chatContent2 = `Hello, Let me get right on that`
    const chat3 = `Very long message for no reason`
    const chat4 = `UUUmmm, your document is done buddy!`

    return <div className="chatContainer">
        <ChatBubble
            type={'sent'}
            content={chatContent}        
        />

        <ChatBubble
            type={'received'}
            content={chatContent2}
            user='AI'        
        />


        <ChatBubble
            type={'sent'}
            content={chat3}        
        />

        <ChatBubble
            type={'received'}
            content={chat4}  
            user='AI'       
        />

        <ChatBubble
            type={'received'}
            content={chatContent2}  
            user='AI'       
        />


        <ChatBubble
            type={'sent'}
            content={chat3}        
        />

        <ChatBubble
            type={'received'}
            content={chat4}   
            user='AI'      
        />
    </div>
}