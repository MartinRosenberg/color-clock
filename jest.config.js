module.exports = {
  roots: [
    '<rootDir>/src/',
    '<rootDir>/internals/testing/' // Allows to move __mocks__ here
  ],
  setupFiles: [
    '<rootDir>/internals/testing/enzyme-setup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testMatch: [
    '<rootDir>/src/**/tests/*.test.(js|jsx)'
  ],
}
