import React, { FC, useReducer } from 'react'

type StateType = { count: number }
type ActionType = { type: string }

const initialState: StateType = { count: 100 } // 初始值

// 根据传入的 action 返回新的 state（不可变数据）
function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const CounterReducer: FC = () => {
  const [state, dispath] = useReducer(reducer, initialState)

  return (
    <>
      <span>count: {state.count} </span>
      <button
        onClick={() => {
          dispath({ type: 'increment' })
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispath({ type: 'decrement' })
        }}
      >
        -
      </button>
    </>
  )
}

export default CounterReducer
