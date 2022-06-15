// if we need multiple loaders... compose using withPlugins
// module.exports = withPlugins([withFonts, withCSS, withImages], {

// next config docs => https://nextjs.org/docs/api-reference/next.config.js/introduction
// env variable docs => https://nextjs.org/docs/api-reference/next.config.js/environment-variables

// redirect docs => https://nextjs.org/docs/api-reference/next.config.js/redirects

// sentry article => https://leerob.io/blog/configuring-sentry-for-nextjs-apps
// sentry example => https://github.com/vercel/next.js/tree/canary/examples/with-sentry

// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting
const withSourceMaps = require("@zeit/next-source-maps")();

// Use the SentryWebpack plugin to upload the source maps during build step
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
  VERCEL_GITHUB_COMMIT_SHA,
  VERCEL_GITLAB_COMMIT_SHA,
  VERCEL_BITBUCKET_COMMIT_SHA,
} = process.env;

const COMMIT_SHA =
  VERCEL_GITHUB_COMMIT_SHA ||
  VERCEL_GITLAB_COMMIT_SHA ||
  VERCEL_BITBUCKET_COMMIT_SHA;

const config = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // redirects,
  webpack: (config, options) => {
    // config.module.rules.push({
    //   test: /\.md$/,
    //   use: 'raw-loader',
    // })

    // In `pages/_app.js`, Sentry is imported from @sentry/browser. While
    // @sentry/node will run in a Node.js environment. @sentry/node will use
    // Node.js-only APIs to catch even more unhandled exceptions.
    //
    // This works well when Next.js is SSRing your page on a server with
    // Node.js, but it is not what we want when your client-side bundle is being
    // executed by a browser.
    //
    // Luckily, Next.js will call this webpack function twice, once for the
    // server and once for the client. Read more:
    // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
    //
    // So ask Webpack to replace @sentry/node imports with @sentry/browser when
    // building the browser's bundle
    if (!options.isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }

    // When all the Sentry configuration env variables are available/configured
    // The Sentry webpack plugin gets pushed to the webpack plugins to build
    // and upload the source maps to sentry.
    // This is an alternative to manually uploading the source maps
    // Note: This is disabled in development mode.

    // console.log({ SENTRY_DSN });
    // console.log({ SENTRY_ORG })
    // console.log({ SENTRY_PROJECT });
    // console.log({ SENTRY_AUTH_TOKEN });
    // console.log({ COMMIT_SHA });

    if (
      SENTRY_DSN &&
      SENTRY_ORG &&
      SENTRY_PROJECT &&
      SENTRY_AUTH_TOKEN &&
      // process.env.npm_package_version &&
      // COMMIT_SHA &&
      NODE_ENV === "production"
    ) {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: ".next",
          ignore: ["node_modules"],
          urlPrefix: "~/_next",
          // release: COMMIT_SHA,
          release: process.env.npm_package_version,
          // dryRun: true,
          // release: "foo",
          // debug: true
        })
      );
    }

    return config;
  },
};

let exported =
  process.env.ENABLE_SOURCEMAPS === "true" ? withSourceMaps(config) : config;

exported = withBundleAnalyzer(exported);

module.exports = exported;
