// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'filters/searchTextChange':
//       return {
//         ...state,
//         search: action.payload
//       }
//     case 'filters/statusChange':
//       return {
//         ...state,
//         status: action.payload
//       }
//     case 'filters/prioritiesChange':
//       return {
//         ...state,
//         priorities: action.payload
//       }
//     default:
//       return state
//   }
// }
// export default filterReducer

// Redux toolkit

import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: []
  },
  reducers: {
    searchTextChange: (state, action) => {
      state.search = action.payload
    },
    statusChange: (state, action) => {
      state.status = action.payload
    },
    prioritiesChange: (state, action) => {
      state.priorities = action.payload
    }
  }
})
