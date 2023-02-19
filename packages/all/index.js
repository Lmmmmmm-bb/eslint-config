const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

if (!TS) {
  console.warn('[@lmmmmmm/eslint-config] TypeScript is not installed, fallback to JavaScript only.')
}

module.exports = {
  extends: [
    TS
      ? '@lmmmmmm/eslint-config-ts'
      : '@lmmmmmm/eslint-config-basic',
  ],
}
