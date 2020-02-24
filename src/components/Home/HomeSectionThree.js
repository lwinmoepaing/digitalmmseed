import {
  Row, Col, Typography,
} from 'antd'

const { Title, Text } = Typography

const HomeSectionOne = () => (
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
            <Title level={2} style={{ color: '#52c41a' }}>Our Goals</Title>
            <p>
              We help you invest in farming to increase food production,
              support farmers and earn up to 30% return on investment.
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
						max-width: 500px;
					}

					@media screen and (max-width: 767px) {
						.InvestContainer {
							height: 360px;
						}

						.InvestContainer > .child {
							height: 300px;
						}
					}

					.InvestContainer > .child {
						display: table-cell;
						vertical-align: middle;
						height: 470px;
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
				`}
    </style>
  </div>
)

export default HomeSectionOne
