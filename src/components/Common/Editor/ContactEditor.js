/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import {
  Row, Col, message, Alert,
} from 'antd'
import { memo, useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import FarmerSelfCard from '../Card/FarmerSelfCard'
import { BASE_API_URL } from '../../../../config'


const TextEditor = ({
  project, isEdit, token, authInfo,
}) => {
  const [editProject, setEditProject] = useState(null)
  const [isDoneClick, setDoneClick] = useState(false)

  const _deepCopy = (str) => JSON.parse(JSON.stringify(str))


  const onContactNow = async () => {
    setDoneClick(true)
    try {
      const url = `${BASE_API_URL}/api/v1/project/contact/${project._id}`
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      }
      const response = await fetch(url, options)
      if (!response.ok) throw response
    } catch (e) {
      console.log(e)
    }
  }

  const isContacted = (contact) => contact.some((user) => user._id === authInfo._id)

  useEffect(() => {
    setEditProject(_deepCopy(project))
  }, [project])

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <div className="Container">

            <div>
              <label htmlFor="EditText"> Title </label>

              {!isEdit && <h3>{project.title}</h3>}
            </div>

            <div>
              <label htmlFor="EditBodyText"> Body Text </label>

              {!isEdit && <h3>{ project.body[0]}</h3>}
            </div>

            <div>
              <label htmlFor="ProjectDuration"> Project Duration </label>

              {!isEdit && <h3>{ project.projectDuration}</h3>}
            </div>

            <div>
              <label htmlFor="ProjectDuration"> Project Category </label>

              {!isEdit && <h3>{project.projectCategory}</h3>}
            </div>

          </div>

          <div className="Container">
            { isContacted(project.contactUsers) || isDoneClick
              ? <Alert message="You Already Contacted" type="success" showIcon />
              : <div className="ContactNow" onClick={onContactNow}> Contact Now </div>}
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

					.ContactNow {
						border: 1px solid #97c41a;
						border-radius: 1rem;
						padding: 0 2rem;
						cursor: pointer;
						background: #f6ffed;
						font-weight: bold;
						color: #97c41a;
						text-align: center;
					}

					.ContactNow:hover {
						opacity: 0.7;
					}
				`}
      </style>
    </div>
  )
}

export default memo(TextEditor)
