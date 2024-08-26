const opinionated = require('opinionated-eslint-config');

module.exports = opinionated({
  typescript: {
    tsconfigPath: [ './tsconfig.json', './scripts/tsconfig.json', './test/tsconfig.json' ],
  },
});
