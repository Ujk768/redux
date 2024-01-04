const axios = require('axios')
const redux = require('redux')
const thunk = require('redux-thunk').thunk

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

// Action Creator - Function that returns an action.
const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}


// Thunk allows us to return a function instead of action object
// the function need not be pure and is allowed to have side effects and can dispatch actions
const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('https://dummyjson.com/products').then(
            response => {
                const products = response.data.products.map(product => product.id)
                dispatch(fetchUserSuccess(products))
            },
            err => {
                dispatch(fetchUserFailure(err))
            }
        )
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_USER_SUCCESS: return {
            loading: false,
            users: action.payload,
            error: ''
        }

        case FETCH_USER_FAILURE: return {
            loading: false,
            users: [],
            error: action.payload
        }

        default: return state
    }
}



const store = redux.createStore(reducer, redux.applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUsers())

