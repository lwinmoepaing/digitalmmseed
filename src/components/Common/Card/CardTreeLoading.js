/* eslint-disable react/no-array-index-key */
import { Row, Col } from 'antd'
import TwoTreeLoading from '../SVG/TwoTreeLoading'
import CustomTilt from '../CustomTilt'

const Card = () => (
  <CustomTilt rotateSpeed={15}>
    <div className="TreeContainer">
      <div className="TreeLoadingContainer">
        <TwoTreeLoading style={{ width: 90 }} />
      </div>
      <div style={{ textAlign: 'center', color: 'green' }}> Loading ...</div>
      <style jsx>
        {`
				.TreeContainer {
					border-radius: 7px;
					max-width: 216px;
					height: 290px;
					margin: 0 auto;
					cursor: pointer;
					background: #ffffff;
					box-shadow:  20px 20px 60px #d9d9d9,
											-20px -20px 60px #ffffff;
					overflow: hidden;
					text-align: center;
				}

				.TreeLoadingContainer {
					height: 122px;
					width: 100%;
					background: #f3f3f3;
				}
			`}
      </style>
    </div>
  </CustomTilt>
)

const Arr = Array.from({ length: 8 }).fill(0)

const CardTreeLoading = () => (
  <Row gutter={[16, 16]}>

    { Arr.map(() => (
      <Col key={`${Math.random().toString()}_${Date.now()}`} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
        <Card />
      </Col>
    ))}
  </Row>
)

export default CardTreeLoading
