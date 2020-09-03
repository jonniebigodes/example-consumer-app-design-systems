// .storybook/preview.js

import React from "react";
import { global as designSystemGlobal1 } from "@jonniebigodes/learnstorybook-design-system-with-6-0";

const { GlobalStyle } = designSystemGlobal1;

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
