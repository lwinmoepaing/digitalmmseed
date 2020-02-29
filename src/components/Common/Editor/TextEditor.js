/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import {
  Select, Row, Col, Button, message, Alert,
} from 'antd'
import { memo, useState, useEffect } from 'react'
import { EditFilled, CloseOutlined } from '@ant-design/icons'
import fetch from 'isomorphic-unfetch'
import FarmerSelfCard from '../Card/FarmerSelfCard'
import { BASE_API_URL } from '../../../../config'


const TextEditor = ({
  project, isEdit, toggleEdit, token, setParentProject,
}) => {
  const { Option } = Select

  const [editProject, setEditProject] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const _deepCopy = (str) => JSON.parse(JSON.stringify(str))

  const _onEdit = () => {
    const toChange = !isEdit
    if (toChange) {
      setEditProject(_deepCopy(project))
    }
    toggleEdit(toChange)
  }

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
      const url = `${BASE_API_URL}/api/v1/project/${project._id}`
      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payloads),
      }
      const response = await fetch(url, options)
      if (!response.ok) throw response
      message.success('Successfully Updated')
      setIsLoading(false)
      setParentProject(payloads)
      _onEdit()
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
  }, [project])

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <div className="Container">

            { project && project.status === 'Pending' && !isLoading && (
            <div className={isEdit ? 'CloseButton' : 'EditButton'}>
              {isEdit
                ? <CloseOutlined onClick={_onEdit} />
                : <EditFilled onClick={_onEdit} />}
            </div>
            )}

            <div>
              <label htmlFor="EditText"> Title </label>
              {	isEdit && (
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
              )}
              {!isEdit && <h3>{project.title}</h3>}
            </div>

            <div>
              <label htmlFor="EditBodyText"> Body Text </label>
              {	isEdit && (
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
              )}
              {!isEdit && <h3>{ project.body[0]}</h3>}
            </div>

            <div>
              <label htmlFor="ProjectDuration"> Project Duration </label>
              {	isEdit && (
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
              )}
              {!isEdit && <h3>{ project.projectDuration}</h3>}
            </div>

            <div>
              <label htmlFor="ProjectDuration"> Project Category </label>
              {	isEdit && !isLoading && (
              <div>
                <Select style={{ width: '100%' }} defaultValue={project.projectCategory} size="small" onChange={(value) => _onChange(value, 'projectCategory')}>
                  <Option value="AnimalHusbandry">Animal Husbandry</Option>
                  <Option value="Agriculture">Agriculture</Option>
                  <Option value="Both">Both</Option>
                </Select>
              </div>
              )}

              {!isEdit && <h3>{project.projectCategory}</h3>}
            </div>

            <div>
              {isEdit && (
              <Button
                onClick={onSubmitUpdate}
                htmlType="button"
                style={ButtonStyle}
                loading={isLoading}
              >
                Submit
              </Button>
              )}
            </div>

          </div>

          <Alert message=" You Can Edit Only Pending Project " type="warning" showIcon />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          {editProject && isEdit && (
          <div className="Container">
            <h3 className="text-center"> Preview </h3>
            <FarmerSelfCard payload={editProject} edit />
          </div>
          )}

          {project && !isEdit && (
          <div className="Container">
            <h3 className="text-center"> Preview </h3>
            <FarmerSelfCard payload={project} edit />
          </div>
          )}
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
