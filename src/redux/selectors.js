import { createSelector } from '@reduxjs/toolkit'
export const todoListSelector = (state) => state.todoList
export const searchTextSelector = (state) => state.filters.search
export const statusSelector = (state) => state.filters.status
export const prioritiesSelector = (state) => state.filters.priorities

// Reselect

export const todosRemainingSelector = createSelector(
  todoListSelector,
  statusSelector,
  searchTextSelector,
  prioritiesSelector,
  (todoList, status, searchText, priorities) => {
    const searchTextLowerCase = searchText.toLowerCase()
    return todoList.filter((todo) => {
      const todoNameLowerCase = todo.name.toLowerCase()
      if (status === 'All') {
        return priorities.length
          ? todoNameLowerCase.includes(searchTextLowerCase) &&
              priorities.includes(todo.priority)
          : todoNameLowerCase.includes(searchTextLowerCase)
      }
      return (
        todoNameLowerCase.includes(searchTextLowerCase) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      )
    })
  }
)
