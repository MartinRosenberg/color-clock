import { getColorAndFormattedTime } from '../utils'

beforeEach(() => {
  Date.now = jest.fn(() => 0)
})

describe('getColorAndFormattedTime', () => {
  test('should correctly derive color and formatted time', () => {
    expect(getColorAndFormattedTime()).toEqual({
      color: '#180000',
      time: '18:00:00',
    })
  })
})
