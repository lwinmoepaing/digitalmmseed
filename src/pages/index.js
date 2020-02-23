import PropTypes from 'prop-types'
import {
  Row, Col, Carousel, Button,
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
          <Row>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <div className="HowItWorksContainer">
                <h1>
                  How It Works
                </h1>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <style jsx>
        {`
					.Container {
						background-color: #fff;
					}

					.SectionTwoContainer {
						background-color: #e0ffd6;
						color: #fff;
						padding-top: 5rem;
						padding-bottom: 2rem;
					}

					.HowItWorksContainer {
						padding: 0 1.5rem;
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
