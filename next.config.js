const withTypescript = require("@zeit/next-typescript");
const withCss = require("@zeit/next-css");

/*High Order Function을 이용해서 BundleAnalyzer를 사용할 수 있다.*/
module.exports = withTypescript(withCss({
    webpack:(config) => {
      return config;
    }
}));