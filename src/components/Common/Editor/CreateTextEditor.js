/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import {
  Select, Row, Col, Button, message,
} from 'antd'
import { memo, useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import FarmerSelfCard from '../Card/FarmerSelfCard'
import { BASE_API_URL } from '../../../../config'


const TextEditor = ({
  project, token,
}) => {
  const { Option } = Select
  const Router = useRouter()
  const [editProject, setEditProject] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const _deepCopy = (str) => JSON.parse(JSON.stringify(str))

  const _onChange = async (e, key) => {
    const changeEdit = {
      ...editProject,
    }
    if (key === 'body') {
      changeEdit[key][0] = _deepCopy(e.target.value)
    } else if (key === 'projectCategory') {
      changeEdit[key] = e
    } else {
      changeEdit[key] = _deepCopy(e.target.value)
    }
    setEditProject(_deepCopy(changeEdit))
  }

  const validatePayload = ({ title, body, projectDuration }) => {
    const errors = []

    if (!title) {
      errors.push('Title is Required')
    }

    if (title === '' || title.trim() === '') {
      errors.push('Title should not emply')
    }

    if (!projectDuration) {
      errors.push('Project Duration is Required')
    }

    if (projectDuration === '' || projectDuration.trim() === '') {
      errors.push('Project Duration should not emply')
    }

    if (!body[0]) {
      errors.push('Body Text is Required')
    }

    if (body[0] === '' || body[0].trim() === '') {
      errors.push('Body Text should not emply')
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }

  const onSubmitUpdate = async () => {
    setIsLoading(true)

    const payloads = {
      title: editProject.title,
      body: editProject.body,
      projectDuration: editProject.projectDuration,
      projectCategory: editProject.projectCategory,
    }

    const { isValid, errors } = validatePayload(payloads)
    if (!isValid) {
      errors.forEach((mes) => {
        message.error(mes)
      })
      setIsLoading(false)
      return
    }

    try {
      const url = `${BASE_API_URL}/api/v1/project`
      const postPayload = _deepCopy(editProject)
      delete postPayload.user
      delete postPayload.status
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(postPayload),
      }
      const response = await fetch(url, options)
      if (!response.ok) throw response
      message.success('Successfully Updated')
      setIsLoading(false)
      Router.push('/farmer/projects')
    } catch (e) {
      const errorMessage = await (e.text())
      const { message: mes, data = [] } = await JSON.parse(errorMessage)
      if (mes) { message.error(mes) }
      if (data !== null && data.length > 0) {
        data.forEach(({ message: mesArr }) => {
          message.error(mesArr)
        })
      }
      setIsLoading(false)
    }
  }

  const ButtonStyle = {
    display: 'block',
    width: '100%',
    backgroundColor: '#1890ff',
    color: '#fff',
    border: 'none',
    marginTop: '1rem',
  }

  useEffect(() => {
    setEditProject(_deepCopy(project))
  }, [])

  useEffect(() => {
    if (editProject) {
      setEditProject({
        ...editProject,
        headImg: project.headImg,
      })
    }
  }, [project])

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <div className="Container">

            <div>
              <label htmlFor="EditText"> Title </label>
              <input
                type="text"
                id="EditText"
                className="CustomInput"
                placeholder="Enter Project Title"
                defaultValue={project.title}
                disabled={isLoading}
                readOnly={isLoading}
                onChange={(e) => _onChange(e, 'title')}
              />
            </div>

            <div>
              <label htmlFor="EditBodyText"> Body Text </label>
              <textarea
                size="large"
                type="text"
                id="EditBodyText"
                className="CustomInput"
                placeholder="Enter Project Body Text"
                defaultValue={project.body[0]}
                onChange={(e) => _onChange(e, 'body')}
                disabled={isLoading}
                readOnly={isLoading}
              />
            </div>

            <div>
              <label htmlFor="ProjectDuration"> Project Duration </label>
              <input
                type="text"
                id="ProjectDuration"
                className="CustomInput"
                placeholder="Enter Project Druation"
                defaultValue={project.projectDuration}
                onChange={(e) => _onChange(e, 'projectDuration')}
                disabled={isLoading}
                readOnly={isLoading}
              />
            </div>

            <div>
              <label htmlFor="ProjectDuration"> Project Category </label>

              <div>
                <Select style={{ width: '100%' }} defaultValue={project.projectCategory} size="small" onChange={(value) => _onChange(value, 'projectCategory')}>
                  <Option value="AnimalHusbandry">Animal Husbandry</Option>
                  <Option value="Agriculture">Agriculture</Option>
                  <Option value="Both">Both</Option>
                </Select>
              </div>

            </div>

            <div>
              <Button
                onClick={onSubmitUpdate}
                htmlType="button"
                style={ButtonStyle}
                loading={isLoading}
              >
                Submit
              </Button>
            </div>

          </div>

        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <div className="Container">
            <h3 className="text-center"> Preview </h3>
            {
							editProject && <FarmerSelfCard payload={editProject} edit />
						}
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
					.Container {
						border-radius: 1rem;
						padding: 1rem;
						background: #fff;
						background-size: cover;
						background-position: center center;
						position: relative;
						margin-bottom: 1rem;
					}

					.CustomInput {
						width: 100%;
						background: #f9f9f9;
						border: 1px solid #efefef;
						border-radius: 3px;
						padding: 2px 9px;
					}

					.EditButton, .CloseButton {
						display: inline-block;
						width: 24px;
						text-align: center;
						height: 24px;
						border-radius: 3px;
						position: absolute;
						right: -7px;
						top: -6px;
						background: #83ff83;
						cursor: pointer;
						color: #848484;
						transition: transform .2s ease-in-out;
						padding-top: 2px;
					}

					.CloseButton {
						background: #ff9797;
						color: #fff;
					}
					.EditButton:hover {
						transform: scale(1.1) translateY(-1px);
					}
					.text-center {
						text-align: center
					}
				`}
      </style>
    </div>
  )
}

export default memo(TextEditor)
