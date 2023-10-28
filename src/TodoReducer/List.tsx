import React, { FC, useContext } from 'react'
import { TodoContext } from './index'

const List: FC = () => {
  const context = useContext(TodoContext)
  const { state, dispatch } = context

  function del(id: string) {
    dispatch({ type: 'delete', payload: id })
  }

  return (
    <>
      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => del(todo.id)}>删除</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List
