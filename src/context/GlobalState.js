import React,{useReducer, createContext} from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState = {
    transactions: [ ]
}


//Global context to use anywhere in project Create Context

export const GlobalContext = createContext(initialState);


//Provider component so that we could use above data in the system anywhere
export const GlobalProvider = ({children})=>{
  const [state , dispatch ] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id){
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction){
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider value={{transactions: state.transactions,
    deleteTransaction,
    addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}