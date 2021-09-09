import React, { useReducer} from 'react'
import {users} from '../states/Users'

function reducer(state, action){
    return action;
}

export const GolobalContext = React.createContext()

export const ContextProvider = (props)=>{
    const tmp = {
        id: -1,
        email: '',
        name: '',
        password: ''
    }
    const [stateUsers, setstateUsers] = useReducer(reducer, users)
    const [newUser, setNewUser] = useReducer(reducer, tmp )

    return (
        <GolobalContext.Provider value={{ stateUsers, setstateUsers, newUser, setNewUser}}>
            {props.children}
        </GolobalContext.Provider>
    )
}
