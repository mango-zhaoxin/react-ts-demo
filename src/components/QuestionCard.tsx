import React, { FC } from 'react'
import './QuestionCard.css'
import classnames from 'classnames'

// 定义属性接口
interface QuestionCardProps {
  id: string
  title: string
  isPublished: boolean
  deleteQuestion?: (id: string) => void
  publishQuestion?: (id: string) => void
}

const QuestionCard: FC<QuestionCardProps> = (props) => {
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props

  const itemClassName = classnames('list-item', { published: isPublished })
  // const itemClassName = classnames({
  //   'list-item': true,
  //   published: isPublished
  // })

  // 编辑问卷
  function edit(id: string) {
    console.log(id)
  }

  // 删除问卷
  function del(id: string) {
    deleteQuestion && deleteQuestion(id)
  }

  function publish(id: string) {
    publishQuestion && publishQuestion(id)
  }
  return (
    <div key={id} className={itemClassName}>
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? (
        <span style={{ color: 'green' }}>已发布</span>
      ) : (
        <span>未发布</span>
      )}
      &nbsp;
      <button onClick={() => publish(id)}>发布问卷</button>
      &nbsp;
      <button onClick={() => edit(id)}>编辑问卷</button>
      &nbsp;
      <button onClick={() => del(id)}>删除问卷</button>
    </div>
  )
}

export default QuestionCard
