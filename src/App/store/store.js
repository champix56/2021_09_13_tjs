import { createStore } from 'redux'
//etat initial pour reprise par les composants pour calque des etats initiaux locaux 
export const initialState = { messages: [], users: [], lastMessageId: -1 };
//actions public diffusables
export const ACTIONS = Object.freeze({
    SET_MESSAGES: 'SET_MESSAGES',
    SET_USERS: 'SET_USERS'
});
// actions privees au document 
const PRIVATE_ACTIONS = Object.freeze({
    INIT: 'INIT'
});
// definition des action et leurs traitements sur l'etat du magasin 
function reducers(state = initialState, action) {
    console.error(action.type);
    switch (action.type) {
        case PRIVATE_ACTIONS.INIT:

            setInterval(() => {
                fetch('http://localhost:5679/users', { method: 'GET' })
                    .then(flux => flux.json())
                    .then(arr => {
                        store.dispatch({ type: ACTIONS.SET_USERS, values: arr })
                        return arr;
                    })
            }, 1000)

            setInterval(() => {
                fetch('http://localhost:5679/messages?id_gte=' + (store.getState().lastMessageId + 1), { method: 'GET' })
                    .then(flux => flux.json())
                    .then(arr => {
                        let lastId = store.getState().lastMessageId;
                        arr.map(element => {
                            if (lastId < element.id) lastId = element.id
                            return null;
                        });

                        store.dispatch({ type: ACTIONS.SET_MESSAGES, values: arr, maxId: lastId })
                        return arr;
                    })
            }, 1000)
            return state;
        case ACTIONS.SET_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, ...action.values],
                lastMessageId: action.maxId
            };
        case ACTIONS.SET_USERS: return { ...state, users: action.values };
        case ACTIONS.SAVE_MESSAGE:
            fetch('http://localhost:5679/messages',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify(action.value)
                })
            return  state;
        default: return state;
    }
}

// let state=reducers(undefined,{type:PRIVATE_ACTIONS.INIT});
// console.log(state);


// state=reducers(state,{type:ACTIONS.SET_MESSAGES,values:[{id:0},{id:1}]});
// console.log(state);


// state=reducers(state,{type:ACTIONS.SET_MESSAGES,values:[{id:2},{id:3}]});
// console.log(state);

const store = createStore(reducers);

store.subscribe(() => {
    console.warn(store.getState())
})

store.dispatch({ type: PRIVATE_ACTIONS.INIT });
// store.dispatch({ type: ACTIONS.SET_MESSAGES, values: [{ id: 0 }, { id: 1 }] });
// store.dispatch({ type: ACTIONS.SET_USERS, values: [{ id: 2 }, { id: 3 }] });

export default store;