module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'google',
    ],
    'parser': '@babel/eslint-parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'ignorePatterns': [
        'public/bundle.js',
        'public/scripts/*.js',
        'src/playground/*.js',
    ],
    'settings': {
        'react': {
            'version': '16.0.0',
        },
    },
    'rules': {
        'indent': ['error', 4],
        'max-len': ['error', {'code': 120}],
        'no-invalid-this': ['off'],
        'react/prop-types': ['off'],
        'require-jsdoc': ['off'],
    },
};
