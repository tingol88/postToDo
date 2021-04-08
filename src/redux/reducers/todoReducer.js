import * as TYPES from '../types/types'

function todoReducer(todos = [], action) {
  switch (action.type) {
    case TYPES.CREATE_TODO:
      return [...todos, action.data]
    case TYPES.DELETE_TODO:
      return todos.filter((el) => el.id !== action.data.id)
    case TYPES.EDIT_TODO:
      return todos.map((el) => {
        return el.id === action.data.id ? action.data : el
      })
    case TYPES.DONE_TODO:
      return todos.map((el) => {
        return el.id === action.data.id ? { ...el, isDone: true } : el
      })
      case TYPES.COPY_TODO:
        return [...todos].push(action.data)
    default:
      return todos;
  }
}

export default todoReducer
