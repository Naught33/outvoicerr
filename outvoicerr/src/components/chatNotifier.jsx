import './components.css'


export const ChatNotifier=({title, description, icon, action})=>{
    return (
        <>
            <div className="notifier">
                <div className="notificationInfo">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="actionBtn" onClick={action}>{icon}</div>
            </div>
        </>
    )
}