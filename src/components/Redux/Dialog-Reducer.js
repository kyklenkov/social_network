const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: "Where's my crypto, dude?"},
        {id: 3, message: 'Wozzza, man! I sent 40 Tusd to you Exodus)'},
        {id: 4, message: 'You saw this dump? It\'s fuckin amazing :(('},
        {id: 5, message: 'Hello, your Lambo arrived!'},
        {id: 6, message: 'To the moon, pleaaaseee)))'}
    ],

        dialogs: [
        {id: 1, name: 'Michael'},
        {id: 2, name: 'Mark'},
        {id: 3, name: 'Norman'},
        {id: 4, name: 'Christian'},
        {id: 5, name: 'Mohammed'},
        {id: 6, name: 'John'}
    ],
        newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case (UPDATE_NEW_MESSAGE_BODY):
            return {
                ...state,
                newMessageBody: action.body
            };

        case (SEND_MESSAGE):
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
                newMessageBody: ''
            };

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;