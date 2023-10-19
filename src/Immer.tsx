import React, { FC, useState } from 'react'
import produce from 'immer'

const ImmerDemo: FC = () => {
  // const [userInfo, setUserInfo] = useState({ name: 'mango', age: 20 })
  // function changeAge() {
  //   setUserInfo(
  //     produce((draft) => {
  //       draft.age = 30
  //     })
  //   )
  // }

  const [list, setList] = useState([
    {
      title: 'Learn TypeScript',
      done: true
    },
    {
      title: 'Try Immer',
      done: false
    }
  ])

  function changeList() {
    const nextState = produce(list, (draftState) => {
      draftState.push({ title: 'Tweet about it' })
      draftState[1].done = true
    })
    setList(nextState)
  }
  return (
    <div>
      <h2>state-使用immer保证不可变数据</h2>
      {/* <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeAge}>change age</button> */}
      <div>{JSON.stringify(list)}</div>
      <button onClick={changeList}>change age</button>
    </div>
  )
}

export default ImmerDemo
