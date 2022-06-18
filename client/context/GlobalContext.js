// import React, { createContext, useContext, useReducer, useEffect } from "react";
// import axios from "axios";

// //initial state 
// const initialState ={
//     item: null,
//     fetchingItem: true,
//     quantity: null,
// }

// //reducer
// const GlobalReducer = (state, action) => {
//     switch (action.type) {
//     //   case "SET_ITEM":
//     //     return {
//     //       ...state,
//     //       user: action.payload,
//     //       fetchingUser: false,
//     //     };
//     //   case "SET_COMPLETE_TODOS":
//     //     return {
//     //       ...state,
//     //       completeToDos: action.payload,
//     //     };
//     //   case "SET_INCOMPLETE_TODOS":
//     //     return {
//     //       ...state,
//     //       incompleteToDos: action.payload,
//     //     };
//     //   case "RESET_USER":
//     //     return {
//     //       ...state,
//     //       user: null,
//     //       completeToDos: [],
//     //       incompleteToDos: [],
//     //       fetchingUser: false,
//     //     };
//       default:
//         return state;
//     }
//   };

//   //create the context
//   export const GlobalContext = createContext(initialState);

//   // provider component
//   export const GlobalProvider = (props) => {
//     const [state, dispatch] = useReducer(globalReducer, initialState);

//     //action: get current item


    
//     const value = {
//         ...state,
//     }


//     return (
//         <GlobalContext.Provider value={value}>
//           {props.children}
//         </GlobalContext.Provider>
//       );
//   }

//   export function useGlobalContext(){
//     return useContext(GlobalContext);
//   }