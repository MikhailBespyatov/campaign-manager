module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', 'node_modules']
      }
    }
  },
  globals: {
    screen: true,
    window: true,
    document: true,
    localStorage: true,
    navigator: true,
    fetch: true,
    FormData: true,
  },
    rules: {
      'react/jsx-filename-extension': 'off',
      'react/jsx-props-no-spreading': 'off',
      'global-require': 'off',
      // 'react/state-in-constructor': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      // 'jsx-a11y/no-static-element-interactions': 'off',
      // 'jsx-a11y/no-noninteractive-element-interactions': 'off',
      // 'import/prefer-default-export': 'off',
    }
};
