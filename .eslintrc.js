module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
		"eslint:recommended",
		"airbnb"
	],
	settings: {
		"react": {
			"version": "detect"
		}
	},
  globals: {
    Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		React: "writable"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
	},
	parser: "babel-eslint",
  plugins: [
    'react',
  ],
  rules: {
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"no-tabs": 0,
		"react/jsx-one-expression-per-line": [1, { "allow": "single-child" }],
		semi: ["error", "never"],
		"linebreak-style": "off"
	},
};
