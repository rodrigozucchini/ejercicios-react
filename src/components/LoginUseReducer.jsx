import React, { useReducer } from 'react';

//ACTION
const FIELD = 'FIELD';
const LOGIN = 'LOGIN';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const LOGOUT = 'LOGOUT';

//INITIAL STATE
const initialState = {
    username : '',
    password: '',
    error: '',
    isLoading: false,
    isLoggedIn: false
}


//REDUCER
const loginReducer = (state, action) => {
    switch (action.type) {
        case FIELD:
            return {
                ...state,
                [action.fieldName]: action.payload
            }
        case LOGIN:
            return {
                ...state,
                error: '',
                isLoading: true
            }
        case SUCCESS:
        return {
            ...state,
            error: '',
            isLoading: false,
            isLoggedIn: true
        }
        case ERROR:
            return {
                ...state,
                error: 'Invalid Username or Password',
                isLoading: false,
                isLoggedIn: false,
                username: '',
                password: ''
            }
        case LOGOUT:
            return {
                ...state,
                error: '',
                isLoggedIn: false
            }
        default:
            break;
    }
}


const Loginusereducer = () => {

    const [state, dispatch] = useReducer(loginReducer, initialState)

    //OBTENER TODOS LOS VALORES COMO VARIABLES
    const { username, password, error, isLoading, isLoggedIn } = state;

    //SUBMIT
    const submit = async (e) => {
        e.preventDefault();
        //DISPATCH ACTION
        dispatch({type: LOGIN});
        try {
            await function login({username, password}) {
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if(username === 'admin' && password === 'admin') {
                            resolve()
                        } else {
                            reject()
                        }
                    }, 2000);
                })
            }
        dispatch({type:SUCCESS})
        } catch (error) {
            dispatch({type: ERROR})
        }
    }


    //LOGOUT
    const logout = () => {
        dispatch({type: LOGOUT})
    }

    return (
        <div className='App'>
            <div>
                {
                    isLoggedIn ? 
                    (
                    <div>
                        <h1>
                            Welcome, {username}
                        </h1>
                        <button onClick={logout}>
                            Logout
                        </button>
                    </div>
                    ) 
                    : 
                    (
                        <form onSubmit={submit}>
                            {
                                error && <p style={{color: 'tomato'}}>{error}</p>
                            }
                            <input 
                                type='text'
                                placeholder='Username'
                                value={username}
                                onChange= {(e) => 
                                    dispatch(
                                        {
                                            type: FIELD, 
                                            fieldName: 'username', 
                                            payload: e.currentTarget.value
                                        })
                                }
                            />
                            <input 
                                type='text'
                                placeholder='Password'
                                value={password}
                                onChange= {(e) => dispatch(
                                    {
                                        type: FIELD, 
                                        fieldName: 'password', 
                                        payload: e.currentTarget.value
                                    })}
                            />
                            <button type='submit'>
                                {isLoading ? 'Logging...' : 'Login'}
                            </button>
                        </form>
                    ) 
                }
            </div>
        </div>
    );
}

export default Loginusereducer;
