import PropTypes from 'prop-types'
import {
  Row, Col, Card,
} from 'antd'
import Layout from '../layouts/Layout'
import { withTranslation } from '../i18n'

import HomeSectionOne from '../components/Home/HomeSectionOne'


const Index = ({ t }) => {
  const name = 'Something'
  return (
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
              optimizing financial performance while achieving our goal of increasing local production.
            </p>
          </div>
          <div style={{ width: '100%', overflow: 'hidden', padding: '0 1.5rem' }}>
            <Row gutter={[16, 16]}>
              <Col xs={{ span: 12 }} md={{ span: 6 }}>
                <div className="CustomCardStyle">
                  <p className="CardLeft">div content</p>
                  <p className="CardRight">div content</p>
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }}>
                <div className="CustomCardStyle">
                  <p className="CardLeft">div content</p>
                  <p className="CardRight">div content</p>
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }}>
                <div className="CustomCardStyle">
                  <p className="CardLeft">div content</p>
                  <p className="CardRight">div content</p>
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }}>
                <div className="CustomCardStyle">
                  <p className="CardLeft">div content</p>
                  <p className="CardRight">div content</p>
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
						padding: 0 1.5rem;
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
						display: 'flex'
					}

					.CardRight {
						flex: 3;
						display: 'flex'
					}

					@media screen and (max-width: 767px) {
						.SectionTwoContainer {
							max-height: 460px;
						}
					}
				`}
      </style>
    </Layout>
  )
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Index)
