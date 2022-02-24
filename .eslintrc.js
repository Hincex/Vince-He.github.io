const { defineConfig } = require('eslint-define-config');

const isDev = process.env.NODE_ENV === 'development';

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  globals: {
    React: true
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // React本身配置
    // 关闭react默认的props-type验证
    'react/prop-types': 0,
    // 关闭使用解构赋值的检测
    'react/destructuring-assignment': [0, 'always'],
    // 允许使用数组索引为key
    'react/no-array-index-key': 0,
    // 组件显示名称
    'react/display-name': 0,
    // html5标签
    'react/jsx-boolean-value': 0,
    // jsx扩展名
    'react/jsx-filename-extension': 0,
    // 允许扩展props
    'react/jsx-props-no-spreading': 0,
    //
    'react/jsx-curly-brace-presence': 0,
    'react/self-closing-comp': 1,
    'react/button-has-type': 0,
    'react/require-default-props': 0,
    'react/jsx-key': 0,
    'react/jsx-no-bind': 0,
    'react/no-unused-prop-types': 1,
    // 解决require报错问题
    'import/no-extraneous-dependencies': [0, { devDependencies: true }],
    //  引入顺序问题
    'import/order': 0,
    'import/newline-after-import': 0,
    // 允许单独导出
    'import/prefer-default-export': 0,
    // 解决别名问题
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-mutable-exports': 0,
    'no-unused-vars': 0,
    'prefer-const': 1,
    'no-nested-ternary': 0,
    'no-unneeded-ternary': 0,
    'no-restricted-syntax': 1,
    'consistent-return': 0,
    // 允许console
    'no-console': 0,
    'no-return-assign': 0,
    'array-callback-return': 0,
    // switch-case default
    'default-case': 1,
    // 一次阔以多个变量声明
    'one-var': 0,
    'no-undef': 0,
    // 避免作用域污染
    'no-shadow': 0,
    'spaced-comment': 1,
    // 箭头函数
    'arrow-body-style': 0,
    'no-param-reassign': 0,
    'prefer-template': 1,
    'no-else-return': 0,
    // 允许下划线变量
    'no-underscore-dangle': 0,
    'no-case-declarations': 0,
    // 允许使用++
    'no-plusplus': 0,
    // 允许空表达式
    'no-empty': 1,
    'no-use-before-define': 0,
    'no-await-in-loop': 0,
    'no-lonely-if': 0,
    'prefer-object-spread': 1,
    'no-bitwise': 0,
    'object-shorthand': 0,
    'func-names': 0,
    'global-require': 0,
    'no-unused-expressions': 0,
    'linebreak-style': 'off',
    'no-debugger': 0,
    // 检测驼峰命名
    camelcase: 0,
    // jsx-a11y配置
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'prettier/prettier': isDev ? 'warn' : 'off'
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 0
      }
    }
  ]
});
