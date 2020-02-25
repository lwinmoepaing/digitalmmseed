import {
  Row, Col, Typography,
} from 'antd'
import PropTypes from 'prop-types'

const { Title, Text } = Typography

const HomeSectionOne = ({ t }) => (
  <div className="HomeSectionThreeContainer">
    <Row>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <div className="RightImageContainer">
          <div className="CarouselImgContainer">
            <Text style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold',
              backgroundColor: 'rgba(0,0,0,0.3)',
              display: 'inline-block',
              borderRadius: 3,
              padding: '1rem',
            }}
            >
              Poultry
            </Text>
            <img src="/Index/chicken.jpg" alt="Chicken" />
          </div>
        </div>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <div className="InvestContainer">
          <div className="child">
            <Title level={2} style={{ color: '#52c41a' }}>
              { t('OurGoals') }
            </Title>
            <p>
              {t('Goal')}
            </p>
            <p className="text-success">
              {t('GoalMessage')}
            </p>
          </div>
        </div>
      </Col>

    </Row>
    <style jsx>
      {`
					.HomeSectionThreeContainer {
						background: #fff;
						padding-bottom: 2rem;
					}

					.InvestContainer {
						height: 460px;
						display: block;
					}

					.InvestContainer > .child {
						display: table-cell;
						vertical-align: middle;
						height: 100%;
						padding: 0 .5rem;
						max-width: 620px;
						margin: 0 auto;
					}

					@media screen and (max-width: 767px) {
						.InvestContainer > .child {
							display: block;
							text-align: center;
						}
					}



					.RightImageContainer {
						max-width: 380px;
						margin: 0 auto;
						position: relative;
						z-index: 2;
					}

					.CarouselImgContainer {
						position: relative;
						height: 500px;
						overflow: hidden;
						background-color: #dfdfdf;
						border-radius: 4px;
					}

					.CarouselImgContainer > img {
						object-fit: cover;
						width: 100%;
						height: 100%;
						border-radius: 4px;
					}

					.SvgContainer {
						max-width: 220px;
						margin: 0 auto;
					}

					.HomeSectionOneContainer {
					}

					.text-success {
						color: #52c41a;
						padding: 0.4rem;
						border-radius: 4px;
						background: #f7f7f7;
					}

				`}
    </style>
  </div>
)

HomeSectionOne.propTypes = {
  t: PropTypes.func.isRequired,
}

export default HomeSectionOne
