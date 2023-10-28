import React, { FC, ChangeEvent, useState, useContext } from 'react'
import { nanoid } from 'nanoid'
import { TodoContext } from './index'

const InputForm: FC = () => {
  const { state, dispatch } = useContext(TodoContext)

  // 输入框文字
  const [text, setText] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!text.trim()) return

    const newTodo = {
      id: nanoid(5),
      title: text
    }
    dispatch({ type: 'add', payload: newTodo })
    setText('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">what needs to be done?</label>
      <br />
      <input id="new-todo" onChange={handleChange} value={text} />
      <button type="submit">Add #{state.length + 1}</button>
    </form>
  )
}

export default InputForm
