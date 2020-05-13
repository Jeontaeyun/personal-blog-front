// import dotenv from "dotenv";
// dotenv.config();

module.exports = {
    env: {
        COOKIE_SECRET: process.env.COOKIE_SECRET,
        JWT_SECRET: process.env.JWT_SECRET,
        GRAPHQL_URI: process.env.GRAPHQL_URI
    },
    webpack: config => {
        return config;
    }
};
