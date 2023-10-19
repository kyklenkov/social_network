import sidebarReducer from "./Sidebar-Reducer";
import dialogsReducer from "./Dialog-Reducer";
import profileReducer from "./Profile-Reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 5},
                {id: 2, message: "Hi, it's my first post", likesCount: 17}
            ],
            newPostText: 'ХуйХуйХуй'
        },

        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('Hello, Kitty)')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer = наблюдатель
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


        /*if (action.type === 'ADD_POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 7, message: body});
            this._callSubscriber(this._state);
        }*/
    }
}

export default store;
window.store = store