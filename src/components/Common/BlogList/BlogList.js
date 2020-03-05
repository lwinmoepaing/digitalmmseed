/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { Pagination, Row, Col } from 'antd'
import { useState, useEffect } from 'react'
import { BASE_API_URL } from '../../../../config'
import BlogCard from './BlogCard'
import CardPostLoading from '../Card/CardPostLoading'

const AllBlogsForFarmer = (props) => {
  const { authInfo, token } = props
  const [blogs, setBlog] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [meta, setMeta] = useState({})


  const fetchData = async (pageNumber = 1) => {
    setLoading(true)
    const url = `${BASE_API_URL}/api/v1/blog?page=${pageNumber}`
    try {
      const res = await fetch(url)
      const { data, meta: getMeta } = await res.json()
      setBlog(data)
      setMeta(getMeta)
      setLoading(false)
    } catch (e) {
      setBlog([])
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onChangePaginate = async (pageNumber) => {
    await fetchData(pageNumber)
  }

  const Card = ({ blog, authInfo }) => (
    <Col xs={{ span: 24 }} sm={{ span: 12 }}>
      <BlogCard blog={blog} authInfo={authInfo} />
    </Col>
  )

  return (
    <div>
      { isLoading
        ? <CardPostLoading />
        : (
          <div>
            <Row gutter={[16, 16]}>
              {
								blogs.map((blog) => <Card blog={blog} key={blog._id} authInfo={authInfo} />)
							}
            </Row>
            <Pagination
              defaultCurrent={meta.currentPage || 1}
              pageSize={meta.perPage || 8}
              total={meta.itemCount || 0}
              onChange={onChangePaginate}
            />
          </div>
        )}
    </div>
  )
}
export default AllBlogsForFarmer
