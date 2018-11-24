module.exports = {
  setupFiles: [
    'raf/polyfill',
    '<rootDir>/src/tests/test-setup.js'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testMatch: [
    '<rootDir>/src/tests/**/*.test.(js|jsx)'
  ],
}
