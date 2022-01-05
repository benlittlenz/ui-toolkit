/* eslint-env node */

module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
};
