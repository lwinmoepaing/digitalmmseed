import NextI18Next from 'next-i18next'

const languages = ['en', 'mm']

const options = {
  preload: languages,
  defaultLanguage: 'en',
  otherLanguages: ['mm'],
  localePath: 'locales',
  keySeparator: false,
}

const NextI18NextInstance = new NextI18Next(options)

NextI18NextInstance.i18n.languages = languages

export default NextI18NextInstance

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
  Link,
  i18n,
} = NextI18NextInstance
