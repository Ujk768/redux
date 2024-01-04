const redux = require('redux');

//Action Type
const BUY_CAKE = 'BUY_CAKE'
// // Action - object with a type property
// {
//     type: BUY_CAKE
// }

// Action Creator - Function which returns an action

const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

// (prevState, action) => new State

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: state
    }
}

// Redux store holding the application state
const store = redux.createStore(reducer)

const unsubsribe = store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubsribe()