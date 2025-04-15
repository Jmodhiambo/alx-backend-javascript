module.exports = {
  env: {
    browser: false,
    es6: true, // Enable ES6 syntax support
    node: true, // Specify Node.js environment
    jest: true, // Enable Jest environment
  },
  extends: [
    'airbnb-base', // Airbnb's base config
    'plugin:jest/recommended', // Recommended Jest rules
  ],
  plugins: ['jest'], // Include Jest plugin
  parserOptions: {
    ecmaVersion: 2018, // Match your Node.js version (12 supports ECMAScript 2018)
    sourceType: 'module', // Enable usage of `import`/`export`
  },
  rules: {
    'no-console': 'off', // Allow console logs
    'no-shadow': 'off', // Permit variable shadowing
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
};

