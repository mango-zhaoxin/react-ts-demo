import React, { FC, useState } from 'react'
import QuestionCard from './components/QuestionCard'
import { produce } from 'immer'
import './List1.css'

const List1: FC = () => {
  const [questionList, setQuestionList] = useState([
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
  ])

  /**
   * @desc 新增问卷
   */
  function add() {
    // const questionIndex = questionList.length + 1
    // setQuestionList(
    //   // 新增使用 concat
    //   questionList.concat({
    //     id: 'q' + questionIndex,
    //     title: '问卷' + questionIndex,
    //     isPublished: false
    //   })
    // )

    // 使用immer
    const r = Math.random().toString().slice(-3)
    setQuestionList(
      produce((draft) => {
        draft.push({
          id: 'q' + r,
          title: '问卷' + r,
          isPublished: false
        })
      })
    )
  }

  /**
   * @desc 删除问卷
   */
  function deleteQuestion(id: string) {
    // 删除使用 filter
    // setQuestionList(
    //   questionList.filter((item) => {
    //     if (item.id === id) return false
    //     else return true
    //   })
    // )

    // 使用immer
    setQuestionList(
      produce((draft) => {
        const index = draft.findIndex((item) => item.id === id)
        draft.splice(index, 1)
      })
    )
  }

  /**
   * @desc 发布问卷
   */
  function publishQuestion(id: string) {
    // 修改使用 map
    // setQuestionList(
    //   questionList.map((item) => {
    //     if (item.id !== id) return item
    //     return {
    //       ...item,
    //       isPublished: true
    //     }
    //   })
    // )

    // 使用immer
    setQuestionList(
      produce((draft) => {
        const target = draft.find((item) => item.id === id)
        if (target) target.isPublished = true
      })
    )
  }

  return (
    <div>
      <h1>问卷列表页-新版</h1>
      {questionList.map((item) => {
        const { id, title, isPublished } = item
        return (
          <QuestionCard
            key={id}
            id={id}
            title={title}
            isPublished={isPublished}
            deleteQuestion={deleteQuestion}
            publishQuestion={publishQuestion}
          />
        )
      })}
      <button onClick={add}>新增问卷</button>
    </div>
  )
}

export default List1
