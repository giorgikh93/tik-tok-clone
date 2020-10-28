import React, { createContext, useContext, useReducer } from 'react';


const StateProvider = createContext()

export function Context({initialState,reducer,children}) {
    return (
        <StateProvider.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateProvider.Provider>
    );
}

export const useConsumer = ()=>useContext(StateProvider)