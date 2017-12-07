module.exports = {
  name: 'dummy-jest',
  verbose: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ['node_modules'],
  testRegex: '(/test/.*\\.spec)\\.js',
  setupFiles: ['./test/global.js'],
  modulePathIgnorePatterns: ['global.js'],
  testPathIgnorePatterns: [],
  moduleNameMapper: {},
  transformIgnorePatterns: []
};
