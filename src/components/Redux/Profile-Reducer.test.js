import profileReducer, {addPostActionCreator, deletePost} from "./Profile-Reducer";
import {getActiveElement} from "@testing-library/user-event/dist/utils";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: "Hi, it's my first post", likesCount: 17}
    ]
};

it ('length of posts should be incremented', () => {
    // 1. Test data

    let action = addPostActionCreator('it-kamasutra.com');

    // 2.Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(3);
})

it ('message of new post should be correct', () => {
    // 1. Test data

    let action = addPostActionCreator('it-kamasutra.com');

    // 2.Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts[2].message).toBe('it-kamasutra.com');
})

it ('after deleting length of message should be decrement', () => {
    // 1. Test data

    let action = deletePost(1);

    // 2.Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(1);
})

it ('after deleting length should not be decrement if id is incorrect', () => {
    // 1. Test data

    let action = deletePost(50);

    // 2.Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(2);
})

