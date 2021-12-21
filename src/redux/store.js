// import { createStore } from 'redux'
// import rootReducer from './reducer'
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// export default store

// Redux toolkit

import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../components/Filters/filterSlice'
import todoListSlice from '../components/TodoList/todoListSlice'
import { loadData } from '../localStorage'

const todos = loadData()
const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer
  },
  preloadedState: todos
})
store.subscribe(() => {
  localStorage.setItem('todoState', JSON.stringify(store.getState().todoList))
})
export default store
