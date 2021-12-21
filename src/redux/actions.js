export const addTodo = (payload) => {
  return {
    type: 'todoList/addTodo',
    payload
  }
}

export const toggleCompleted = (id) => {
  return {
    type: 'todoList/toggleCompleted',
    payload: id
  }
}

export const searchTextChange = (text) => {
  return {
    type: 'filters/searchTextChange',
    payload: text
  }
}

export const filterStatusChange = (status) => {
  return {
    type: 'filters/statusChange',
    payload: status
  }
}
export const filterPrioritiesChange = (priorities) => {
  return {
    type: 'filters/prioritiesChange',
    payload: priorities
  }
}
