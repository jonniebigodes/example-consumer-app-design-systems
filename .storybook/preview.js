// .storybook/preview.js

import React from 'react';


/* export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
]; */

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
