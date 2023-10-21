import React from 'react'
// import List1 from './List1'
// import List2 from './List2'
// import ImmerDemo from './Immer'
// import UseRefDemo from './UseRefDemo'
// import UseMemoDemo from './UseMemoDemo'
// import useTitle from './hooks/useTitle'
import useMouse from './hooks/useMouse'

function App() {
  // useTitle('demo page')
  const { x, y } = useMouse()
  return (
    <>
      {/* <List1 /> */}
      {/* <List2 /> */}
      {/* <ImmerDemo /> */}
      {/* <UseRefDemo /> */}
      {/* <UseMemoDemo /> */}
      鼠标的位置：{x} {y}
    </>
  )
}

export default App
