import Carousel from 'react-multi-carousel'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
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

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>
      <p> Projects From Farmers </p>
      { projects.length === 0 && isLoading
        ? <div> Loading </div>
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
