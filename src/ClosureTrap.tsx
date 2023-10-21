import React, { useState, useEffect, useRef, FC } from 'react'

const Demo: FC = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  useEffect(() => {
    countRef.current = count
  }, [count])

  const addFn = () => {
    setCount(count + 1)
  }

  const alertFn = () => {
    setTimeout(() => {
      // alert(count)         // count值类型
      alert(countRef.current) // ref引用类型
    }, 3000)
  }

  return (
    <>
      <p>闭包陷阱</p>
      {count}
      <button onClick={addFn}>add</button>
      <button onClick={alertFn}>alert</button>
    </>
  )
}

export default Demo
