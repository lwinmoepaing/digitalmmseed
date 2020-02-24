import {
  Row, Col, Carousel, Button, Typography,
} from 'antd'

import Tree from '../Common/SVG/Tree'
import Triangle from '../Common/SVG/Triangle'

const { Title, Text } = Typography

const HomeSectionOne = () => {
  const imgArr = [
    { title: 'Farming', url: '/Index/Home2.jpg' },
    { title: 'Animal Husbandry', url: '/Index/Home3.jpg' },
    { title: 'Agriculture', url: '/Index/Home1.jpg' },
  ]


  return (
    <div className="HomeSectionOneContainer">
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className="InvestContainer">
            <div className="child">
              <div className="SvgContainer">
                <Tree />
              </div>
              <Title level={2} style={{ color: '#52c41a' }}>Invest in agriculture</Title>
              <p>
                We help you invest in farming to increase food production,
                support farmers and earn up to 30% return on investment.
              </p>
              <div>
                <Button className="heartBeat" style={{ marginRight: 3 }} shape="round" type="primary" icon="align-right"> Invest Now </Button>
                <Button className="heartBeat" style={{ marginRight: 3 }} shape="round"> Ask Me ?</Button>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className="RightImageContainer">
            <div className="TriangleRotate">
              <span className="HeHe">
                <Triangle />
              </span>
            </div>
            <Carousel autoplay>
              { imgArr.map((data) => (
                <div className="CarouselImgContainer" key={`${data.url}i`}>
                  <Text style={{
                    position: 'absolute',
                    top: '50%',
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
                    {data.title}
                  </Text>
                  <img src={data.url} alt={data.url} />
                </div>
              ))}
            </Carousel>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
					.Container {
						background-color: #fff;
					}

					.InvestContainer {
						height: 460px;
						display: block;
						max-width: 400px;
						text-align: center;
						margin: 0 auto;
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
						max-width: 440px;
						margin: 0 auto;
						position: relative;
						bottom: -5rem;
						z-index: 2;
					}

					.CarouselImgContainer {
						position: relative;
						height: 500px;
						overflow: hidden;
						background-color: #dfdfdf
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
						background-color: #fff;
						background-image: url(/Index/Background.svg);
						background-position: center top;
						background-repeat: no-repeat;
						background-size: auto;
					}

					.TriangleRotate {
						width: 100px;
						height: 100px;
						position: absolute;
						top: -41px;
						left: -50px;
						animation: rotate 20s linear infinite alternate;
					}

					.TriangleRotate > .HeHe {
						display: inline-block;
						width: 100%;
						height: 100%;
						transform: rotate(20deg);
						animation: triAppear 2s ease-in-out forwards ;
					}

					@keyframes rotate {
						0% {
							transform: rotate(0deg)
						}

						100% {
							transform: rotate(360deg)
						}
					}

					@keyframes triAppear {
						0% {
							opacity: 0;
							transform: rotate(20deg) scale(0.4);
						}
						100% {
							opacity: 1;
							transform: rotate(20deg) scale(1);
						}
					}
				`}
      </style>
    </div>
  )
}

export default HomeSectionOne
