import React, { FC } from 'react'
import './List1.css'
import QuestionCard from './components/QuestionCard'

const List1: FC = () => {
  const questionList = [
    {
      id: 'q1',
      title: '问卷1',
      isPublished: true
    },
    {
      id: 'q2',
      title: '问卷2',
      isPublished: false
    },
    {
      id: 'q3',
      title: '问卷3',
      isPublished: true
    },
    {
      id: 'q4',
      title: '问卷4',
      isPublished: false
    }
  ]

  return (
    <div>
      <h1>问卷列表页</h1>
      <div>测试</div>
      {questionList.map((item) => {
        const { id, title, isPublished } = item
        return (
          <QuestionCard
            key={id}
            id={id}
            title={title}
            isPublished={isPublished}
          />
        )
      })}
    </div>
  )
}

export default List1
