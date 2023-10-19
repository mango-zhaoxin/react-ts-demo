import React, { FC, useMemo, useState } from 'react'

const Demo: FC = () => {
  console.log('demo....')

  const [sum1, setSum1] = useState(10)
  const [sum2, setSum2] = useState(20)
  const [text, setText] = useState('hello')

  // 修改text的值的时候，组件会重新渲染，但是不会渲染sum,因为sum的值useMemo缓存了
  // 只有修改 sum1 和 sum2 的值的时候，才会打印 useMemo render....
  const sum = useMemo(() => {
    console.log('useMemo render....')
    return sum1 + sum2
  }, [sum1, sum2])

  return (
    <>
      <div>the sum is {sum}</div>
      <div>
        {sum1} <button onClick={() => setSum1(sum1 + 1)}>add sum1</button>
      </div>
      <div>
        {sum2} <button onClick={() => setSum2(sum2 + 1)}>add sum2</button>
      </div>
      <div>
        {text}{' '}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  )
}

export default Demo
