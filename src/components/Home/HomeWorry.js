import PropTypes from 'prop-types'
import { Typography } from 'antd'

const { Title } = Typography

const HomeWorry = ({ t }) => (
  <div style={{ padding: '3rem 0 4rem 0', backgroundColor: '#f5f5f5' }}>
    <div>
      <Title level={4} style={{ textAlign: 'center', color: 'rgb(82, 196, 26)', paddingBottom: '1rem' }}>
        {t('DontWorryToUse')}
      </Title>
      <p style={{ maxWidth: 600, textAlign: 'center', margin: '.5rem auto' }}>

        {t('DontWorryText')}
        <a href="tel:+959420059241"> 09420059241 </a>
        {t('DontWorryCall')}
      </p>

    </div>
    <style jsx>
      {`
			.TextContainer {
				background: #fff;
				display: block;
				max-width: 600px;
				border: 1px solid #dfdfdf;
				margin: 0 auto;
				text-align: center;
				padding: 1rem;
				border-radius: 4px;
			}
		`}
    </style>
  </div>
)

HomeWorry.propTypes = {
  t: PropTypes.func.isRequired,
}

export default HomeWorry
