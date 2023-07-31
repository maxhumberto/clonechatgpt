import React from "react";
import "../ChatMessage/chatMessage.css";
import Avatar from "../../assets/avatar";

// user (user | chatpgt)
//message - aonde vai estar o prompt
//{
// messageuser: "gpt"
//    message: "crie um nome de artigo"
//}


export const ChatMessage =  ({message}) => {
    return (
    <div className={`chat-message  ${message.user === 'gpt'} && "chatgpt"`}> 
    <div className="chat-message-center">
    <div className={ `avatar ${message.user === 'gpt' && "chatgpt"}`}>
        {message.user === 'gpt' && (
            < Avatar/>
        )}
    </div>
    <div className="message">
        {message.message}

    </div>
    </div>
    
    </div>
    )
}