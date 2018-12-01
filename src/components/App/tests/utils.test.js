import { Modes } from '../constants'
import { getColorAndTime } from '../utils'

beforeEach(() => {
  Date.now = jest.fn(() => 0)
})

describe('getColorAndTime', () => {
  test('should return color and formatted time', () => {
    const res = getColorAndTime(Modes.simple.value)
    expect(res).toMatchObject({
      time: expect.stringMatching(/^\d{1,2}:\d{2}:\d{2}$/),
      color: expect.stringMatching(/^#\d{6}$/),
    })
  })

  const testCases = [
    { mode: Modes.simple, color: '#180000' },
    { mode: Modes.rent, color: '#c00091' },
    { mode: Modes.sunrise, color: '#c80000' },
    { mode: Modes.unix, color: '#000000' },
  ]
  testCases.map(({ mode, color }) => {
    test(`should correctly derive color in ${mode.name} mode`, () => {
      expect(getColorAndTime(mode.value)).toMatchObject({ color })
    })
  })
})
