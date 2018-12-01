import dayjs from 'dayjs'

import { Modes } from './constants'

export const getColorAndTime = (mode, time = dayjs()) => ({
  color: Modes[mode].getColor(time),
  time: time.format('H:mm:ss'),
})
