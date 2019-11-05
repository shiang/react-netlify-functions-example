const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  runner: 'jest-runner-eslint',
  displayName: 'lint',
  testPathIgnorePatterns: ['node_modules', 'dist', 'public', './webpack.*.js'],
  testMatch: ['<rootDir>/src**/*.+(js|ts|tsx)']
}
