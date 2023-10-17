import React, { FC } from 'react'
import './QuestionCard.css'

// 定义属性接口
interface QuestionCardProps {
  id: string
  title: string
  isPublished: boolean
}

const QuestionCard: FC<QuestionCardProps> = (props) => {
  const { id, title, isPublished } = props
  function edit(id: string) {
    console.log(id)
  }
  return (
    <div key={id} className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? (
        <span style={{ color: 'green' }}>已发布</span>
      ) : (
        <span>未发布</span>
      )}
      &nbsp;
      <button onClick={() => edit(id)}>编辑问卷</button>
    </div>
  )
}

export default QuestionCard
