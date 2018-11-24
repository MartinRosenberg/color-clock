export const authReducer = (state = {}, action) => {
  const actions = {
    LOG_IN: () => ({ uid: action.uid }),
    LOG_OUT: () => ({}),
    DEFAULT: () => state
  }
  return (actions[action.type] || actions.DEFAULT)()
}
