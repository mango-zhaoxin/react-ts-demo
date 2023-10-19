import React, { FC, useRef } from 'react'

// DEMO1
// const Demo: FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null)

//   function selectInput() {
//     const inputElem = inputRef.current
//     // 1. inputElem 的值是一个DOM节点, 也就是input
//     // 2. inputElem.select() => 直接使用 DOM 的API去操作DOM
//     if (inputElem) inputElem.select()
//   }

//   return (
//     <>
//       <input ref={inputRef} defaultValue={'mango'} />
//       <button onClick={selectInput}>选中input</button>
//     </>
//   )
// }

// DEMO2
const Demo: FC = () => {
  // 不是DOM节点，而是普通的JS变量
  const nameRef = useRef('mango')

  function changeName() {
    // 1.useRef一般用来操作DOM
    // 2.修改ref的值，不会触发rerender, 页面不会重新渲染
    // 3.ref 适用于保存数据，保存不变的值
    // 4.如果变量需要再jsx中进行显示的话，那么就是用useState, 而不要去使用useRef
    nameRef.current = 'MANGO'
  }

  return (
    <>
      <div>name {nameRef.current}</div>
      <button onClick={changeName}>changeName</button>
    </>
  )
}

export default Demo
