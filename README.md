# Egghead CycleJS lesson by André Staltz
## installation
Following the instructions both at

- https://babeljs.io/docs/setup/#installation
- https://github.com/staltz/xstream

simply

    yarn add babel-cli babel-preset-env xstream

write this in `.babelrc` at the root of the project

    {
      "presets": ["env"]
    }

Then run

    yarn run build

to build the project using babel (ES6 here), then finally run the code

    node lib/code.js
