import React from 'react'
// import List1 from './List1'
// import List2 from './List2'
// import ImmerDemo from './Immer'
// import UseRefDemo from './UseRefDemo'
// import UseMemoDemo from './UseMemoDemo'
// import useTitle from './hooks/useTitle'
// import useMouse from './hooks/useMouse'
// import useGetInfo from './hooks/useGetInfo'
// import { useTitle, useMouse } from 'ahooks'
import ClosureTrap from './ClosureTrap'

function App() {
  // useTitle('demo page')
  // const { x, y } = useMouse()
  // const { loading, info } = useGetInfo()
  // ahooks使用
  // useTitle('my page')
  // const mouse = useMouse()

  return (
    <>
      {/* <List1 /> */}
      {/* <List2 /> */}
      {/* <ImmerDemo /> */}
      {/* <UseRefDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* 鼠标的位置：{x} {y} */}
      {/* {loading ? '加载中....' : info} */}
      {/* ahooks使用标注鼠标位置：{mouse.pageX}, y: {mouse.pageY} */}
      <ClosureTrap />
    </>
  )
}

export default App
