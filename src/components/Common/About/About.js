/* eslint-disable react/prop-types */
import {
  Typography,
} from 'antd'

const { Title } = Typography

const About = ({ t }) => (
  <div>
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
  </div>
)

export default About
