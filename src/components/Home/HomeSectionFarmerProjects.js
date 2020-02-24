import Carousel from 'react-multi-carousel'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { Spin, Typography } from 'antd'
import CustomCard from '../Common/Card/CustomCard'
import { CarouselResponsive, BASE_API_URL } from '../../../config'

const HomeSectionFarmerProjects = ({ t }) => {
  const [projects, setProject] = useState([])
  const [isLoading, setLoading] = useState(true)
  const { Title } = Typography
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
    <div className="DivContainer">

      <div>
        <Title level={2} style={{ color: '#52c41a', textAlign: 'center', marginBottom: '2rem' }}> Latest Project From Farmers</Title>
      </div>

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

      <style jsx>
        {`
				.DivContainer {
					background-color: #f2ffed;
    			padding: 2rem .5rem;
				}
			`}

      </style>
    </div>
  )
}

export default HomeSectionFarmerProjects
