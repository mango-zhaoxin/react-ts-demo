import React, { FC, createContext, useReducer } from 'react'
import List from './List'
import InputForm from './InputForm'
import reducer, { ActionType } from './reducer'
import initialState from './store'

export const TodoContext = createContext({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: (action: ActionType) => {}
})

const Demo: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <p>Todo List by useReducer</p>
      <List />
      <InputForm />
    </TodoContext.Provider>
  )
}

export default Demo
