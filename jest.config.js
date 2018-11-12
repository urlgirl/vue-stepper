module.exports = {
  verbose: true,
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  "transformIgnorePatterns": [
    "/node_modules/(?!@vue/test-utils).+\\.js$"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  moduleDirectories: [
    "node_modules"
  ],
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  "testURL": "http://localhost/"
}
