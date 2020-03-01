import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Typography,
} from 'antd'
import Layout from '../layouts/Layout'
import { withTranslation, i18n } from '../i18n'
import isAuthMiddleware from '../../lib/middleware/isAuthMiddleware'

const { Title } = Typography

const Index = ({ t }) => (
  <Layout i18n={i18n}>
    <div className={`${i18n.language === 'mm' ? ' font-mm' : ''}`}>
      <div className="Container">
        <Title level={2} style={{ color: '#52c41a' }}>
          { t('OurGoals') }
        </Title>
        <p className="MessageContainer">
          {t('GoalMessage')}
        </p>
      </div>

      <div className="Container">
        <Title level={2} style={{ color: '#52c41a' }}>
          {t('HowWorks')}
        </Title>
        <p className="MessageContainer">
          {t('FirstStep')}
        </p>
        <p className="MessageContainer">
          {t('SecondStep')}
        </p>
        <p className="MessageContainer">
          {t('ThirdStep')}
        </p>
        <p className="MessageContainer">
          {t('FourthStep')}
        </p>
      </div>
    </div>

    <style jsx>
      {`
				.Container {
					background: #ffffff;
					padding: 1rem;
					border-radius: 1rem;
					max-width: 600px;
					margin: 1rem auto;
				}

				.MessageContainer {
					padding: .5rem;
					background: #fafafa;
					border-radius: 1rem;
				}
			`}
    </style>
  </Layout>
)

Index.getInitialProps = async (context) => {
  await isAuthMiddleware(context)

  return {
    namespacesRequired: ['common'],
  }
}

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default connect((state) => state)(withTranslation('common')(Index))
