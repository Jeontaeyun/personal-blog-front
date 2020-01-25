module.exports = {
    testEnvironment: "jsdom",
    roots: ["<rootDir>/components"],
    preset: "ts-jest",
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.prod.json"
        }
    },
    setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    verbose: true,
    displayName: {
        name: "STARK",
        color: "blue"
    },
    notify: true,
    notifyMode: "always",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"]
    //snapshotSerializers: ["enzyme-to-json/serializer"]
};
