module.exports = {
    testEnvironment: "jsdom",
    roots: ["<rootDir>/components"],
    preset: "ts-jest",
    setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    verbose: true,
    displayName: {
        name: "JEST",
        color: "red"
    },
    notify: true,
    notifyMode: "failure-chang",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"]
    //snapshotSerializers: ["enzyme-to-json/serializer"]
};
