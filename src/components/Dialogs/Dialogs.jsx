import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message.jsx";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/Dialog-Reducer";
import {Navigate} from 'react-router-dom';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        // props.store.dispatch(sendMessageCreator());
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
        // props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    // if (!props.isAuth) return <Navigate to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message, please :)'></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;