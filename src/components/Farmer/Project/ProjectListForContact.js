/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { Pagination, Row, Col } from 'antd'
import { useState, useEffect } from 'react'
import { BASE_API_URL } from '../../../../config'
import CardContactToUser from '../../Common/Card/CardContactToUser'
import CardTreeLoading from '../../Common/Card/CardTreeLoading'

const AllProjectsForFarmer = (props) => {
  const {
    authInfo, token, status, from,
  } = props
  const [projects, setProject] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [meta, setMeta] = useState(null)


  const fetchData = async (pageNumber = 1) => {
    setLoading(true)
    const url = `${BASE_API_URL}/api/v1/project/${from}/status?status=Pending&page=${pageNumber}`
    try {
      const res = await fetch(url)
      const { data, meta: getMeta } = await res.json()

      console.log('Data', data)
      console.log('meta', getMeta)
      setProject(data)
      setMeta(getMeta)
      setLoading(false)
    } catch (e) {
      setProject([])
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onChangePaginate = async (pageNumber) => {
    await fetchData(pageNumber)
  }

  const Card = ({ project }) => (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
      <CardContactToUser payload={project} />
    </Col>
  )

  return (
    <div>
      { isLoading
        ? <CardTreeLoading />
        : (
          <div>
            <Row gutter={[16, 16]}>
              {
								projects.map((project) => <Card project={project} key={project._id} />)
							}
            </Row>
            { meta && (
            <Pagination
              defaultCurrent={meta.currentPage || 1}
              pageSize={meta.perPage || 8}
              total={meta.itemCount || 0}
              onChange={onChangePaginate}
            />
            )}
          </div>
        )}
    </div>
  )
}
export default AllProjectsForFarmer
