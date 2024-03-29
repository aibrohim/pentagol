module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  output: "standalone",
  publicRuntimeConfig: {
    backURL: process.env.NEXT_PUBLIC_BACK_URL,
  },
};
