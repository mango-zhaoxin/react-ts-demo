import React, { FC, useState } from 'react'
import { produce } from 'immer'

const ImmerDemo: FC = () => {
  // 对象测试练习
  const [userInfo, setUserInfo] = useState({ name: 'mango', age: 20 })
  function changeAge() {
    setUserInfo(
      produce((draft) => {
        draft.age = 30
      })
    )
  }

  // 数组测试练习
  // const [list, setList] = useState(['x', 'y'])
  // function changeList() {
  //   // 19987654356
  //   setList(
  //     produce((draft) => {
  //       draft.push('z')
  //     })
  //   )
  // }

  return (
    <div>
      <h2>state-使用immer保证不可变数据</h2>
      <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeAge}>change age</button>
      {/* <div>{JSON.stringify(list)}</div>
      <button onClick={changeList}>change age</button> */}
    </div>
  )
}

export default ImmerDemo
