import { logIn, logOut } from '../../actions/auth'

test('Should generate correct logIn action', () => {
  const uid = 'abc'
  expect(logIn(uid)).toEqual({
    type: 'LOG_IN',
    uid,
  })
})

test('Should generate correct logOut action', () => {
  expect(logOut()).toEqual({
    type: 'LOG_OUT',
  })
})
