/* eslint-disable react/jsx-no-target-blank */
import PropTypes from 'prop-types'
import { Typography, Row, Col } from 'antd'
import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  GithubOutlined,
  HomeOutlined,
  RiseOutlined,
} from '@ant-design/icons'

const { Title } = Typography

const HomeContact = ({ t }) => (
  <div className="Container">
    <div className="Card">
      <Title level={2} style={{ textAlign: 'center', color: 'rgb(82, 196, 26)' }}>
        {t('Contact')}
      </Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <div className="ContactList">
            <MailOutlined />
            {' '}
            <a href="mailto:lwinmoepaing.dev@gmail.com">lwinmoepaing.dev@gmail.com</a>
          </div>
          <div className="ContactList">
            <PhoneOutlined />
            {' '}
            <a href="tel:+959420059241">
              09420059241
            </a>
          </div>
          <div className="ContactList">
            <div className="mb-1">
              <HomeOutlined />
              {' '}
              {t('Location')}
            </div>
            <p>
              South Dagon , Yangon
            </p>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div className="ContactList">
            <FacebookOutlined />
            {' '}
            <a href="https://www.facebook.com/lwin.im" target="_blank">
              www.facebook.com/lwin.im
            </a>
          </div>
          <div className="ContactList">
            <GithubOutlined />
            {' '}
            <a href="https://github.com/lwinmoepaing" target="_blank">
              lwinmoepaing
            </a>
          </div>
          <div className="ContactList">
            <div className="mb-1">
              <RiseOutlined />
              {' '}
              {t('Education')}
            </div>
            <p>
              2013 - 2015
              {',  '}
              University of Computer Studies Yangon
            </p>
            <p>
              2016 - Current
              {',  '}
              Dagon University (Emajor)
            </p>
            <p>
              2018 - 2019
              {',  '}
              University of Yangon (Diploma In Web Development)
            </p>
            <p>
              2020 - Current
              {',  '}
              SEAMEO Regional Centre for History and Tradition
            </p>
          </div>
        </Col>
      </Row>
    </div>
    <style jsx>
      {`
			.Container {
				padding: 3rem 1rem 4rem 1rem;
				width: 100%;
				overflow: hidden;
			}
			.TextContainer {
				background: #fff;
				display: block;
				max-width: 800px;
				border: 1px solid #dfdfdf;
				margin: 0 auto;
				text-align: center;
				padding: 1rem;
				border-radius: 4px;
			}

			.Card {
				max-width: 900px;
				background: #ffffff;
				border-radius: 1rem;
				padding: 1rem;
				margin: 0 auto;
				box-shadow:  6px 6px 12px #cccccc,
										-6px -6px 12px #ffffff;
			}

			.ContactList {
				padding: 1rem;
				background: #fafafa;
				margin: 0 0 1rem 0;
				border-radius: 1rem;
			}

			.ContactList > a {
				color: #000;
			}
			.mb-1 {
				margin-bottom: .5rem;
			}
		`}
    </style>
  </div>
)

HomeContact.propTypes = {
  t: PropTypes.func.isRequired,
}

export default HomeContact
