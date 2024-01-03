import React, {createContext, useContext, useState} from "react";
import { chatData } from "../data/dummy";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    UserProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    return (
        <StateContext.Provider
        value={{test}}>

        </StateContext.Provider>
    )
}