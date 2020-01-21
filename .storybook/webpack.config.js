const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve("babel-loader"),
                options: {
                    presets: [["react-app", { flow: false, typescript: true }]]
                }
            },
            /**
             * ! #react-docgen-typescript-loader
             * * this loader parse props from typescript and documentation in addon-docs
             */
            require.resolve("react-docgen-typescript-loader")
        ]
    });

    config.resolve.extensions.push(".ts", ".tsx");

    config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
            async: false,
            checkSyntacticErrors: true,
            formatter: require("react-dev-utils/typescriptFormatter")
        })
    );
    return config;
};
