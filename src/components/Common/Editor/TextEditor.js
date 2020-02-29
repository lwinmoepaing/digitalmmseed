/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { Select, Row, Col } from 'antd'
import { memo, useState, useEffect } from 'react'
import { EditFilled, CloseOutlined } from '@ant-design/icons'
import FarmerSelfCard from '../Card/FarmerSelfCard'

const TextEditor = ({
  project, isEdit, toggleEdit,
}) => {
  const { Option } = Select

  const [editProject, setEditProject] = useState(null)

  const _onEdit = () => {
    const toChange = !isEdit
    if (toChange) {
      setEditProject(project)
    }
    toggleEdit(toChange)
  }

  const _onChange = async (e, key) => {
    const changeEdit = {
      ...editProject,
    }
    if (key === 'body') {
      changeEdit[key][0] = e.target.value
    } else if (key === 'projectCategory') {
      changeEdit[key] = e
    } else {
      changeEdit[key] = e.target.value
    }

    setEditProject(changeEdit)
  }

  useEffect(() => {
    setEditProject(project)
  }, [project])

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <div className="Container">
            { project && project.status === 'Pending' && (
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
                onChange={(e) => _onChange(e, 'title')}
              />
              )}
              {!isEdit && <h3>{project.title}</h3>}
            </div>

            <div>
              <label htmlFor="EditBodyText"> Body Text </label>
              {	isEdit && (
              <textarea
                type="text"
                id="EditBodyText"
                className="CustomInput"
                placeholder="Enter Project Body Text"
                defaultValue={project.body[0]}
                onChange={(e) => _onChange(e, 'body')}
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
              />
              )}
              {!isEdit && <h3>{ project.projectDuration}</h3>}
            </div>

            <div>
              <label htmlFor="ProjectDuration"> Project Category </label>
              {	isEdit && (
              <div>
                <Select defaultValue={project.projectCategory} size="small" onChange={(value) => _onChange(value, 'projectCategory')}>
                  <Option value="AnimalHusbandry">Animal Husbandry</Option>
                  <Option value="Agriculture">Agriculture</Option>
                  <Option value="Both">Both</Option>
                </Select>
              </div>
              )}

              {!isEdit && <h3>{ project.projectCategory}</h3>}
            </div>

          </div>
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
