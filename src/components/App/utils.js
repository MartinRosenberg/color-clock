import moment from 'moment'

export const getNewState = () => {
  const time = moment()
  return {
    color: time.format('#HHmmss'),
    time: time.format('H:mm:ss'),
  }
}
