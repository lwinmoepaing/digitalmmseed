/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import {
  Typography, Row, Col,
} from 'antd'

import { useState, useEffect } from 'react'
import { BASE_API_URL } from '../../../config'
import BlogCard from '../Common/BlogList/BlogCard'
import CardPostLoading from '../Common/Card/CardPostLoading'


const { Title } = Typography

const HomeSectionBlog = (props) => {
  const {
    t,
  } = props
  const [blogs, setBlog] = useState([])
  const [isLoading, setLoading] = useState(true)


  const fetchData = async (pageNumber = 1) => {
    setLoading(true)
    const url = `${BASE_API_URL}/api/v1/blog?page=${pageNumber}`
    try {
      const res = await fetch(url)
      const { data } = await res.json()
      const slice = data.slice(0, 4)
      setBlog(slice)
      setLoading(false)
    } catch (e) {
      setBlog([])
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const Card = ({ blog }) => (
    <Col xs={{ span: 24 }} sm={{ span: 12 }}>
      <BlogCard blog={blog} authInfo={null} />
    </Col>
  )

  return (
    <div
      style={{
        padding: '3rem 1rem 2rem 1rem',
        backgroundColor: '#f5f5f5',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Title level={2} style={{ textAlign: 'center', color: 'rgb(82, 196, 26)' }}>
        {t('Blog List')}
      </Title>
      <div>
        { isLoading
          ? <CardPostLoading />
          : (
            <div>
              <Row gutter={[16, 16]}>
                {
										blogs.map((blog) => <Card blog={blog} key={blog._id} />)
									}
              </Row>
            </div>
          )}
      </div>
      <style jsx>
        {`
					.TextContainer {
						background: #fff;
						display: block;
						max-width: 600px;
						border: 1px solid #dfdfdf;
						margin: 0 auto;
						text-align: center;
						padding: 1rem;
						border-radius: 4px;
					}
				`}
      </style>
    </div>
  )
}

HomeSectionBlog.propTypes = {
  t: PropTypes.func.isRequired,
}

export default HomeSectionBlog
