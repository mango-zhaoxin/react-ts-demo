import React from 'react'
// import List1 from './List1'
// import List2 from './List2'
// import ImmerDemo from './Immer'
// import UseRefDemo from './UseRefDemo'
import UseMemoDemo from './UseMemoDemo'
import useTitle from './hooks/useTitle'

function App() {
  useTitle('demo page')
  return (
    <>
      {/* <List1 /> */}
      {/* <List2 /> */}
      {/* <ImmerDemo /> */}
      {/* <UseRefDemo /> */}
      <UseMemoDemo />
    </>
  )
}

export default App
