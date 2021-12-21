export const loadData = () => {
  try {
    const persistedState = localStorage.getItem('todoState')
    if (persistedState) return JSON.parse(persistedState)
  } catch (e) {
    console.log(e)
  }
}
