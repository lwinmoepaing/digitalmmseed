/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Row, Col } from 'antd'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { BASE_API_URL } from '../../../../config'
import TwoTreeLoading from '../../Common/SVG/TwoTreeLoading'

const FarmerWidgets = ({ authInfo, token }) => {
  const [isLoading, setLoading] = useState(true)
  const [project, setProject] = useState([])

  useEffect(() => {
    async function fetchData() {
      const url = `${BASE_API_URL}/api/v1/farmer/dashboard`
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        })
        const { data } = await res.json()
        setProject(data)
        setLoading(false)
      } catch (e) {
        setProject([])
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const Loading = () => (
    <div className="TreeContainer">
      <div className="TreeLoadingContainer" style={{ textAlign: 'center' }}>
        <TwoTreeLoading style={{ width: 90, height: 'auth' }} />
        <div style={{ textAlign: 'center', color: 'green' }}> Loading ...</div>
      </div>
      <style jsx>
        {`
					.TreeContainer {
						border: 1px solid #dfdfdf;
						border-radius: 10px;
						padding: 1rem;
					}
					.TreeLoadingContainer {
						max-width: 100px;
						margin: 0 auto;
					}
				`}
      </style>
    </div>
  )

  return (
    <Row gutter={[16, 16]}>

      <Col xs={{ span: 12 }} md={{ span: 8 }}>
        {isLoading
          ? (
            <Loading />
          )
          : (
            <div className="CustomCardStyle">
              <div>
                <div className="Count">
                  { project.totalProject }
                </div>
                <h3 className="Title">  Total Projects </h3>
              </div>
            </div>
          )}
      </Col>
      <Col xs={{ span: 12 }} md={{ span: 8 }}>
        {isLoading
          ? (
            <Loading />
          )
          : (
            <div className="CustomCardStyle">
              <div>
                <div className="Count">
                  { project.totalPendingProjects }
                </div>
                <h3 className="Title">  Pending Projects </h3>
              </div>
            </div>
          )}
      </Col>
      <Col xs={{ span: 12 }} md={{ span: 8 }}>
        {isLoading
          ? (
            <Loading />
          )
          : (
            <div className="CustomCardStyle">
              <div>
                <div className="Count">
                  { project.totalWorkingProjects }
                </div>
                <h3 className="Title">  Working Projects </h3>
              </div>
            </div>
          )}
      </Col>
      <Col xs={{ span: 12 }} md={{ span: 8 }}>
        {isLoading
          ? (
            <Loading />
          )
          : (
            <div className="CustomCardStyle">
              <div>
                <div className="Count">
                  { project.totalFinishedProjects }
                </div>
                <h3 className="Title">  Finished Projects </h3>
              </div>
            </div>
          )}
      </Col>
      <Col xs={{ span: 12 }} md={{ span: 8 }}>
        {isLoading
          ? (
            <Loading />
          )
          : (
            <div className="CustomCardStyle">
              <div>
                <div className="Count">
                  { project.totalRejectProjects }
                </div>
                <h3 className="Title">  Reject Projects </h3>
              </div>
            </div>
          )}
      </Col>
      <Col xs={{ span: 12 }} md={{ span: 8 }}>
        {isLoading
          ? (
            <Loading />
          )
          : (
            <div className="CustomCardStyle">
              <div>
                <div className="Count">
                  { project.totalExpiredProjects }
                </div>
                <h3 className="Title">  Expired Projects </h3>
              </div>
            </div>
          )}
      </Col>
      <style jsx>
        {`

					.CustomCardStyle {
						border-radius: 10px;
						padding: 1rem;
						background: #3a87f1;
					}

					.Title {
						text-align: center;
						color: #ffffff;
					}

					.Count {
						text-align: center;
						color: #ffffff;
						font-size: 3rem;
						line-height: 3rem;
					}
				`}
      </style>
    </Row>
  )
}

export default FarmerWidgets
