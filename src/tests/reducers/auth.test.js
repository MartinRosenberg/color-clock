import { authReducer } from '../../reducers/auth'

const uid = 'abc'

test('Should set uid on LOG_IN', () => {
  const state = authReducer({}, { type: 'LOG_IN', uid })
  expect(state).toEqual({ uid })
})

test('Should clear uid on LOG_OUT', () => {
  const state = authReducer({ uid }, { type: 'LOG_OUT' })
  expect(state).toEqual({})
})
