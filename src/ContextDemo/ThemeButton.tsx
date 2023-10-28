import React, { FC, useContext } from 'react'
import { ThemeContext } from './index'

const ThemeButton: FC = () => {
  const theme = useContext(ThemeContext)

  // 根据 theme 设置 color 和 background
  const style = { color: theme.fore, background: theme.background }

  return (
    <>
      <button style={style}>Theme Button</button>
    </>
  )
}

export default ThemeButton
