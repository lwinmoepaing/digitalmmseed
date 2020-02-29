import { Row, Col } from 'antd'
import { useState, useEffect } from 'react'

const UserProfile = () => (
  <Row gutter={[16, 16]}>
    <Col xs={{ span: 24 }} md={{ span: 12 }}>
      <div className="Container">
        <div className="FieldContainer">
          <h3> User Name </h3>
          <p>
            Lorem
          </p>
        </div>
        <div className="FieldContainer">
          <h3> Phone </h3>
          <p>
            Lorem
          </p>
        </div>
        <div className="FieldContainer">
          <h3> Role </h3>
          <p>
            Lorem
          </p>
        </div>
        <div className="FieldContainer">
          <h3> Skills </h3>
          <p>
            Lorem
          </p>
        </div>
      </div>
    </Col>
    <Col xs={{ span: 24 }} md={{ span: 12 }}>
      <div className="Container">
        Lorem
      </div>
    </Col>
    <style jsx>
      {`
				.Container {
					padding: 1rem;
					background-color: #ffffff;
					border-radius: 1rem;
				}

				.FieldContainer {
					background: #dfdfdf;
					padding: .8rem;
					border-radius: 1rem;
					margin-bottom: .5rem;
				}

				.FieldContainer > p {
					margin: 0;
				}
			`}
    </style>
  </Row>
)

export default UserProfile
