import PropTypes from 'prop-types'
import {
  Row, Col,
} from 'antd'
import Layout from '../layouts/Layout'
import { withTranslation } from '../i18n'

import HomeSectionOne from '../components/Home/HomeSectionOne'
import DataSecurityGetMoney from '../components/Common/SVG/DataSecurityGetMoney'
import DataWorkingTree from '../components/Common/SVG/DataWorkingTree'
import DataConfirm from '../components/Common/SVG/DataConfirm'
import DataChoose from '../components/Common/SVG/DataChoose'

const Index = ({ t }) => (
  <Layout>
    <div className="Container">
      <HomeSectionOne />

      <div className="SectionTwoContainer">
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
      </div>
    </div>

    <style jsx>
      {`
					.Container {
						background-color: #fff;
						background-image: url(/Index/Background.svg);
						background-position: center center;
						background-repeat: no-repeat;
						background-size: auto;
						background-attachment: fixed;
						min-height: 160vh;
					}

					.SectionTwoContainer {
						background-color: #e0ffd6;
						padding-top: 5.5rem;
						max-height: 300px;
						padding-bottom: 2rem;
					}

					.HowItWorksContainer {
						padding: 0 2.5rem;
					}

					.HowItWorksContainer > p {
						max-width: 700px;
					}

					.CustomCardStyle {
						display: flex;
						background: rgb(255, 255, 255);
						padding: 1rem;
						border-radius: 1rem;
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
						.SectionTwoContainer {
							max-height: 460px;
						}

						.CardLeft {
							flex: 3;
							display: 'flex';
						}
					}
				`}
    </style>
  </Layout>
)

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Index)
