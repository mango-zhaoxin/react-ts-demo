import { nanoid } from 'nanoid'

export type TodoType = {
  id: string
  title: string
}

// 初始化 Todo List
const initialState: TodoType[] = [
  { id: nanoid(5), title: '吃饭' },
  { id: nanoid(5), title: '睡觉' }
]

export default initialState
