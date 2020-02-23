import NextI18Next from 'next-i18next'
// import path from 'path'

const NextI18NextInstance = new NextI18Next({
  preload: ['en', 'mm'],
  defaultLanguage: 'en',
  otherLanguages: ['mm'],
  localePath: 'locales',
  keySeparator: false,
})

export default NextI18NextInstance

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
  Link,
  i18n,
} = NextI18NextInstance
