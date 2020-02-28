import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import FarmerLayout from '../../layouts/FarmerLayout'
import isPassAuth from '../../../lib/middleware/isPassAuth'
import { withTranslation, i18n } from '../../i18n'

const Index = ({ t }) => (
  <FarmerLayout i18n={i18n}>
    <div className={`Container ${i18n.language === 'mm' ? ' font-mm' : ''}`}>
      <p>
        Profile
        {t('about')}
      </p>
    </div>

    <style jsx>
      {`
				.Container {
					min-height: 160vh;
				}
			`}
    </style>
  </FarmerLayout>
)

Index.getInitialProps = async (context) => {
  await isPassAuth(context)

  return {
    namespacesRequired: ['common'],
  }
}

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default connect((state) => state)(withTranslation('common')(Index))
