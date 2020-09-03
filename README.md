# ISSUE

After following the documentation in the learnstorybook design systems up to the [distribute](http://localhost:8000/design-systems-for-developers/react/en/distribute/) section.

Once the package that i created (@jonniebigodes/learnstorybook-design-system-with-6-0), housed in this [repo](https://github.com/jonniebigodes/learnstorybook-design-system-with-6-0) is added and the `.storybook/main.js` file is changed to the following:

```js
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
```

Issuing `yarn storybook` the following error is thrown in the console:

```sh
$ start-storybook -p 9009 -s public
info @storybook/react v6.0.21
info 
info => Loading static files from: /Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/public .
info => Loading presets
info => Loading presets
info => Loading config/preview file in "./.storybook".
info => Loading config/preview file in "./.storybook".
info => Adding stories defined in ".storybook/main.js".
info => Loading Webpack configuration from `node_modules/react-scripts`
info => Removing existing JavaScript and TypeScript rules.
info => Modifying Create React App rules.
info => Using default Webpack setup.
webpack built f83be7e87e55f04b8f7d in 7608ms
✖ ｢wdm｣: Hash: f83be7e87e55f04b8f7d
Version: webpack 4.44.1
Time: 7608ms
Built at: 03/09/2020 21:38:44
                                          Asset       Size        Chunks                                Chunk Names
                            asset-manifest.json  640 bytes                [emitted]                     
                                    iframe.html   2.97 KiB                [emitted]                     
            main.f83be7e87e55f04b8f7d.bundle.js   93.2 KiB          main  [emitted] [immutable]         main
        main.f83be7e87e55f04b8f7d.bundle.js.map   40.4 KiB          main  [emitted] [dev]               main
    runtime~main.f83be7e87e55f04b8f7d.bundle.js   33.5 KiB  runtime~main  [emitted] [immutable]         runtime~main
runtime~main.f83be7e87e55f04b8f7d.bundle.js.map   34.7 KiB  runtime~main  [emitted] [dev]               runtime~main
    vendors~main.f83be7e87e55f04b8f7d.bundle.js   2.42 MiB  vendors~main  [emitted] [immutable]  [big]  vendors~main
vendors~main.f83be7e87e55f04b8f7d.bundle.js.map   2.37 MiB  vendors~main  [emitted] [dev]               vendors~main
Entrypoint main [big] = runtime~main.f83be7e87e55f04b8f7d.bundle.js runtime~main.f83be7e87e55f04b8f7d.bundle.js.map vendors~main.f83be7e87e55f04b8f7d.bundle.js vendors~main.f83be7e87e55f04b8f7d.bundle.js.map main.f83be7e87e55f04b8f7d.bundle.js main.f83be7e87e55f04b8f7d.bundle.js.map
[0] multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined 160 bytes {main} [built]
[./.storybook/generated-stories-entry.js] 476 bytes {main} [built]
[./.storybook/preview.js] 241 bytes {main} [built]
[./.storybook/preview.js-generated-config-entry.js] 2.57 KiB {main} [built]
[./.storybook/storybook-init-framework-entry.js] 26 bytes {main} [built]
[./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync recursive ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$] ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$ 251 bytes {main} [built]
[./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js] 2.46 KiB {vendors~main} [built]
[./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js] 2.46 KiB {vendors~main} [built]
[./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js] 2.47 KiB {vendors~main} [built]
[./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js] 2.46 KiB {vendors~main} [built]
[./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js] 2.46 KiB {vendors~main} [built]
[./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js] 2.46 KiB {vendors~main} [built]
[./node_modules/@storybook/core/dist/server/common/polyfills.js] 120 bytes {vendors~main} [built]
[./node_modules/@storybook/core/dist/server/preview/globals.js] 93 bytes {vendors~main} [built]
[./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined] 7.68 KiB {vendors~main} [built]
    + 471 hidden modules

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Icon.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Icon.js 1:0-233 42:14-38
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Badge.stories.js
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/StoryLinkWrapper.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/StoryLinkWrapper.js 1:0-233 14:13-37
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Link.stories.js
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Link.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Link.js 1:0-233 155:26-50 170:13-37
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Link.stories.js
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Button.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Button.js 1:0-233 97:15-39 110:14-38
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Button.stories.js
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Button.stories.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Button.stories.js 9:0-229 12:13-35
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Icon.stories.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Icon.stories.js 9:0-229 12:13-35 22:13-35 32:13-35 42:13-35
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Link.stories.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Link.stories.js 9:0-229 12:13-35
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Link.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Link.js 2:0-229 5:13-35 15:13-35 25:13-35 35:13-35 45:13-35 55:13-35 65:13-35 75:13-35 85:13-35 95:13-35 105:13-35 115:13-35
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Link.stories.js
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Icon.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Icon.js 2:0-229 5:13-35 15:13-35
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Badge.stories.js
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Badge.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Badge.js 1:0-229 4:13-35 14:13-35 24:13-35 34:13-35 44:13-35 54:13-35
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Badge.stories.js
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Button.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Button.js 2:0-229 5:13-35 15:13-35 25:13-35
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Button.stories.js
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/shared/styles.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/shared'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/shared/styles.js 1:0-229 4:13-35
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Link.js
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Link.stories.js
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined

ERROR in ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/shared/animation.js
Module not found: Error: Can't resolve '/home/runner/work/learnstorybook-design-system-with-6-0/learnstorybook-design-system-with-6-0/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral' in '/Users/joaocardoso/Documents/storybook_fork/storybook-related/react/learnstorybook-design-system-example-app/node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/shared'
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/shared/animation.js 1:0-229 4:13-35 14:13-35 24:13-35 34:13-35 44:13-35 54:13-35
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Button.js
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist/Button.stories.js
 @ ./node_modules/@jonniebigodes/learnstorybook-design-system-with-6-0/dist sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|mdx))$
 @ ./.storybook/generated-stories-entry.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/preset/defaultParameters.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined
Child HtmlWebpackCompiler:
                          Asset      Size               Chunks  Chunk Names
    __child-HtmlWebpackPlugin_0  6.54 KiB  HtmlWebpackPlugin_0  HtmlWebpackPlugin_0
    Entrypoint HtmlWebpackPlugin_0 = __child-HtmlWebpackPlugin_0
    [./node_modules/@storybook/core/node_modules/html-webpack-plugin/lib/loader.js!./node_modules/@storybook/core/dist/server/templates/index.ejs] 2.19 KiB {HtmlWebpackPlugin_0} [built]

WARN Broken build, fix the error above.
WARN You may need to refresh the browser.
```