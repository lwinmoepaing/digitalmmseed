import PropTypes from 'prop-types'
import Carousel from 'react-multi-carousel'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { Typography } from 'antd'
import CustomCard from '../Common/Card/CustomCard'
import CardLoading from '../Common/Card/CardLoading'
import { CarouselResponsive, BASE_API_URL } from '../../../config'

const HomeSectionFarmerProjects = ({ t }) => {
  const [projects, setProject] = useState([])
  const [isLoading, setLoading] = useState(true)
  const { Title } = Typography
  useEffect(() => {
    async function fetchData() {
      const url = `${BASE_API_URL}/api/v1/project/farmer/status?status=Pending`
      try {
        const res = await fetch(url)
        const { data } = await res.json()
        setProject(data)
        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="DivContainer">

      <div>
        <Title level={2} style={{ color: '#777777', textAlign: 'center', marginBottom: '2rem' }}>

          {t('LatestProjectFromFarmer')}

        </Title>
      </div>

      { projects.length === 0 && isLoading
        ? <CardLoading />
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
					background-color: #f7fff4;
    			padding: 3rem .5rem;
				}
			`}

      </style>
    </div>
  )
}

HomeSectionFarmerProjects.propTypes = {
  t: PropTypes.func.isRequired,
}

export default HomeSectionFarmerProjects
