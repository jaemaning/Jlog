const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs", // Add this line
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {}
  },

  webpackFinal: async (config) =>
    merge(config, {
      plugins: [new VanillaExtractPlugin()],
    }),

  docs: {
    autodocs: true
  }
};