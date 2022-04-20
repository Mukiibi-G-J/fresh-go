import { createContext, useContext, useReducer } from "react";

//* This is a data layer
export const StateContext = createContext();

//! Provider

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//! this  how we us it inside of the component
export const useStateValue = () => useContext(StateContext);
