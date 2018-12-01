const dayjs = require.requireActual('dayjs')

export default (timestamp = 0) => {
  return dayjs(timestamp)
}
