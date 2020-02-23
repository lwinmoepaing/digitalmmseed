import PropTypes from 'prop-types'
import Layout from '../layouts/Layout'
import { withTranslation, i18n } from '../i18n'


const Index = ({ t }) => {
  const changeLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'mm' : 'en')

  return (
    <Layout>
      <h1>
        Hello World
        {t('home')}
      </h1>
      <div>
        <button type="button" onClick={changeLanguage}>
          {i18n.language}
        </button>
      </div>
      <div>
        <img style={{ width: 100, height: 'auto' }} src="/Wallpaper.jpg" alt="Wallpaper	" />
      </div>
    </Layout>
  )
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Index)
