module.exports = {
  'env': {
    'browser': true,
    'commonjs': false,
    'es2021': true,
    
  },
  'extends': 'google',
  'overrides': [
  ],
  'parser': "@babel/eslint-parser",
  'parserOptions': {
    'requireConfigFile': false,
    'babelOptions': {
      'babelrc': false,
      'configFile': false
    },
  },
  'plugins': [
    'only-warn',
  ],
  'rules': {
    // Add additional rules here as a key:value pair
    'only-warn/max-warnings': 0,
  },
};
