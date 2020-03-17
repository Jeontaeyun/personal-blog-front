import withTypescript from '@zeit/next-typescript';
import withCss from '@zeit/next-css';

export default withTypescript(
  withCss({
    webpack: config => {
      return config;
    },
  }),
);
