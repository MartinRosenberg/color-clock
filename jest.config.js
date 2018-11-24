module.exports = {
  setupFiles: [
    'raf/polyfill',
    '<rootDir>/internals/testing/enzyme-setup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testMatch: [
    '<rootDir>/src/**/tests/*.test.(js|jsx)'
  ],
}
