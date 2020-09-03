module.exports = {
  "stories": [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/**/*.stories.@(js|mdx)',
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}