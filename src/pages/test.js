import Carousel from 'react-multi-carousel'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { Spin } from 'antd'
import CustomCard from '../components/Common/Card/CustomCard'
import { CarouselResponsive, BASE_API_URL } from '../../config/index'

const Test = ({ t }) => {
  const [projects, setProject] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      const url = `${BASE_API_URL}/api/v1/project/farmer/status?status=Pending`
      const res = await fetch(url)
      const { data } = await res.json()
      setProject(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  const Loading = () => (
    <div className="LoadingContainer">
      <div className="SpinContainer">
        <Spin spinning tip="Loading..." size="large" />
      </div>
      <style jsx>
        {`
						.LoadingContainer {
							min-height: 290px;
							width: 100%;
							position: relative
						}
						.SpinContainer {
							display: inline-block;
							margin: 0 auto;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
						}
				`}

      </style>
    </div>
  )

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>
      <p> Projects From Farmers </p>
      { projects.length === 0 && isLoading
        ? <Loading />
        :				(
          <Carousel
            responsive={CarouselResponsive}
          >
            {projects.map((project) => (
              <CustomCard key={`${Math.random()}`} payload={project} />
            ))}
          </Carousel>
        )}

    </div>
  )
}

Test.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default Test
