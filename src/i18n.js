import NextI18Next from 'next-i18next'

const languages = ['en', 'mm', 'jp']

const options = {
  preload: languages,
  defaultLanguage: 'mm',
  otherLanguages: ['en', 'jp'],
  localePath: 'locales',
  keySeparator: false,
}

const NextI18NextInstance = new NextI18Next(options)

NextI18NextInstance.i18n.languages = languages
NextI18NextInstance.i18n.language = 'mm'

export default NextI18NextInstance

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
  Link,
  i18n,
  Router,
} = NextI18NextInstance
