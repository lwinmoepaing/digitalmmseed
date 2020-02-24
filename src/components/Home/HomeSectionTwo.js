import {
  Row, Col,
} from 'antd'

import DataSecurityGetMoney from '../Common/SVG/DataSecurityGetMoney'
import DataWorkingTree from '../Common/SVG/DataWorkingTree'
import DataConfirm from '../Common/SVG/DataConfirm'
import DataChoose from '../Common/SVG/DataChoose'

const HomeSectionTwo = () => (
  <div className="SectionTwoContainer">
    <div className="BackgroundOverLay" />
    <div className="HowItWorksContainer">
      <h1>
        How It Works
      </h1>
      <p>
        Using practical experience in farming, our strategies are focused on
        optimizing financial performance while
        achieving our goal of increasing local production.
      </p>
    </div>
    <div style={{ width: '100%', overflow: 'hidden', padding: '0 1.5rem' }}>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <div className="CustomCardStyle">
            <p className="CardLeft">
              <DataChoose />
            </p>
            <p className="CardRight">
              1st, Craeting Project By Farmers Or Our Customers
            </p>
          </div>
        </Col>
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <div className="CustomCardStyle">
            <p className="CardLeft">
              <DataConfirm />
            </p>
            <p className="CardRight">
              2nd, Contact Your Project And Our Staffs will check everything you okay
            </p>
          </div>
        </Col>
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <div className="CustomCardStyle">
            <p className="CardLeft">
              <DataWorkingTree />
            </p>
            <p className="CardRight">
              3rd, Working Duration ( Farming or Animal Husbandry ) of Project
              Get Money By %
            </p>
          </div>
        </Col>
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <div className="CustomCardStyle">
            <p className="CardLeft">
              <DataSecurityGetMoney />
            </p>
            <p className="CardRight">
              4th, After Work Done,
              You will Get Secure 100% Get Money
            </p>
          </div>
        </Col>
      </Row>
    </div>

    <style jsx>
      {`
				.SectionTwoContainer {
					padding-top: 5.5rem;
					padding-bottom: 2rem;
					position: relative;
					background: #fff;
				}

				.SectionTwoContainer > .BackgroundOverLay {
					position: absolute;
					top: 0;
					left: 0;
					background-color: #e0ffd6;
					width: 100%;
					height: 80%;
					display: block;
					z-index: 0;
				}

				.HowItWorksContainer {
					padding: 0 2.5rem;
					position: relative;
					z-index: 1;
				}

				.HowItWorksContainer > p {
					max-width: 700px;
				}

				.CustomCardStyle {
					display: flex;
					background: rgb(255, 255, 255);
					padding: 1rem;
					border-radius: .5rem;
					width: 100%;
					min-height: 150px;
					border: 1px solid #dfdfdf;
				}

				.CardLeft {
					flex: 2;
					display: flex;
					height: 120px;
				}

				.CardRight {
					font-size: .9em;
					flex: 3;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					padding-left: 1px;
					height: 123px;
				}

				@media screen and (max-width: 767px) {
					.CardLeft {
						flex: 1;
						display: flex;
					}

					.CardRight {
						flex: 1;
						display: flex;
					}
				}

				@media screen and (max-width: 420px) {
					.CardLeft {
						width: 100%;
					}

					.CardRight {
						width: 100%;
					}
				}
			`}
    </style>
  </div>

)

export default HomeSectionTwo
