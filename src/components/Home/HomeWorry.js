import PropTypes from 'prop-types'
import { Typography } from 'antd'

const { Title } = Typography

const HomeWorry = ({ t }) => (
  <div style={{ padding: '3rem 0 4rem 0', backgroundColor: '#fff' }}>
    <Title level={2} style={{ textAlign: 'center', color: 'rgb(82, 196, 26)' }}>
      {t('DontWorryToUse')}
    </Title>
    <p style={{ maxWidth: 600, textAlign: 'center', margin: '.5rem auto' }}>

      {t('DontWorryText')}
      <a href="tel:+959420059241"> 09420059241 </a>
      {t('DontWorryCall')}
    </p>

  </div>
)

HomeWorry.propTypes = {
  t: PropTypes.func.isRequired,
}

export default HomeWorry
