module.exports = {
  "stories": [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  refs:{
    'design-system':{
      title:'My design system',
      url:'https://5f4fdd1afe7d0c0022bae51d-buitdlwhxg.chromatic.com'
    }
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}