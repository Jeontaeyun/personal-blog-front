module.exports = {
    testEnvironment: "node",
    roots: ["<rootDir>/components"],
    preset: "ts-jest",
    //setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"]
};
