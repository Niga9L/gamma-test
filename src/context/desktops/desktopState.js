import React, {useReducer} from "react";
import {DesktopContext} from './desktopContext'
import {desktopReducer} from "./desktopReducer";
import {ADD_NUMBER} from "../types";

export const DesktopState = ({children}) => {
    const initialState = [
        {
            objectId: new Date().toString() + 1,
            desktopPosition: 1,
            width: 650,
            height: 380,
            x: 100,
            y: 250
        },
        {
            objectId: new Date().toString() + 2,
            desktopPosition: 1,
            width: 550,
            height: 300,
            x: 1000,
            y: 150
        }
    ]
    const [state, dispatch] = useReducer(desktopReducer, initialState)

    const changeDesktop = (id, number) => {
        const newState = [...state].map(node => {
            if (node.objectId === id) {
                node.desktopPosition += number
            }
            return node
        })

        console.log(newState)

        dispatch({
            type: ADD_NUMBER,
            newState
        })
    }

    return (
        <DesktopContext.Provider value={{state, changeDesktop}}>
            {children}
        </DesktopContext.Provider>
    )
}