module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/components"],
  preset: 'ts-jest',
  setupFiles: ["<rootDir>/env-setup.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
  transform: { "^.+\\.tsx?$": "ts-jest" },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  snapshotResolver: "<rootDir>/snapshotResolver.js",
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // We must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.
    // You can see this setting in tsconfig.jest.json -> "jsx": "react"
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.jest.json"
    }
  }
}
