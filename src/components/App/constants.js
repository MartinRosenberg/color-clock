const getHex = (length) => (decimal) =>
  Math.round(decimal).toString(16).padStart(length, '0')

export const Modes = Object.freeze({
  simple: {
    name: 'Simple',
    value: 'simple',
    getColor: (time) => time.format('#HHmmss'),
  },
  rent: {
    name: 'RENT',
    value: 'rent',
    getColor: (time) => {
      const secOfDay = time.diff(time.clone().startOf('day'), 'seconds')
      return `#${getHex(6)(secOfDay * 194.18298)}`
    }
  },
  sunrise: {
    name: 'Sunrise',
    value: 'sunrise',
    getColor: (time) => {
      const red = getHex(2)(time.hour() * 11.09)
      const green = getHex(2)(time.minute() * 4.32)
      const blue = getHex(2)(time.second() * 4.32)
      return `#${red}${green}${blue}`
    },
  },
  unix: {
    name: 'Unix',
    value: 'unix',
    getColor: (time) => `#${getHex(6)(time.valueOf() % 16777215)}`
  },
})

export const defaultMode = Modes.simple.value
