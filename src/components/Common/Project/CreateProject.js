/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { useEffect, useState, memo } from 'react'
import { Row, Col } from 'antd'
import moment from 'moment'
import { BASE_API_URL } from '../../../../config'
import FileUpload from '../Upload/FileUpload'
import CreateTextEditor from '../Editor/CreateTextEditor'


const ProjectDetail = ({ token, authInfo, redirect }) => {
  const projectInit = {
    headImg: '/wallpaper/wallpaper.jpg',
    title: '',
    body: [''],
    projectDuration: '',
    projectExpiredDate: moment().add(1, 'months').format('YYYY-MM-DD'),
    projectCategory: 'Agriculture',
    attachmentImg: ['/wallpaper/wallpaper.jpg'],
    user: authInfo,
    status: 'Pending',
  }
  const [isLoading, setLoading] = useState(true)
  const [project, setProject] = useState(null)
  const [isError, setError] = useState(false)
  // Edit Project

  useEffect(() => {
    const Console = console
    Console.log(projectInit)
    setProject(projectInit)
  }, [])


  const ImageContainer = () => (
    <div
      className="Container height"
      style={{
        backgroundImage: project !== null ? project.headImg : '',
      }}
    >
      <img className="img" src={BASE_API_URL + project.headImg} alt="Project Data" />
      <style jsx>
        {`
					.Container {
						border-radius: 1rem;
						overflow: hidden;
						background: #fff;
						background-size: cover;
						background-position: center center;
						position: relative;
						margin-bottom: 1rem;
					}

					.height {
						height: 190px;
					}

					.img {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						object-fit: cover;
						object-position: center center;
					}
			`}

      </style>
    </div>
  )


  const _setImage = (img) => {
    setProject({
      ...project,
      headImg: img,
    })
  }


  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }}>

          { project && (
          <FileUpload
            token={token}
            setImage={_setImage}
            type=""
            id=""
          />
          )}

          { project && <ImageContainer />}

          { project && <CreateTextEditor project={project} authInfo={authInfo} token={token} redirect={redirect} />}

        </Col>
      </Row>

      <style jsx>
        {`
					.Container {
						border-radius: 1rem;
						padding: .5rem;
						background: #fff;
						background-size: cover;
						background-position: center center;
						margin-bottom: 1rem;
					}

					.min-height-220 {
						min-height: 220px;
					}

					.text-center {
						text-align: center
					}

					.pb-1 {
						padding-bottom: 1rem
					}
				`}
      </style>
    </div>
  )
}
export default memo(ProjectDetail)
