import PropTypes from 'prop-types'
import { Button } from 'antd'
import Layout from '../layouts/Layout'
import { withTranslation } from '../i18n'


const Index = ({ t }) => (
  <Layout>
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
      {t('Home')}
    </Button>
  </Layout>
)

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Index)
