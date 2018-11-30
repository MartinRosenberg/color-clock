import moment from 'moment'

import { Modes } from './constants'

export const getColorAndTime = (mode, time = moment()) => ({
  color: Modes[mode].getColor(time),
  time: time.format('H:mm:ss'),
})
