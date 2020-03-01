/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import {
  Row, Col, message,
} from 'antd'
import { memo, useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { BASE_API_URL } from '../../../../config'


const TextEditor = ({
  project, isEdit, token, authInfo, setParentProject,
}) => {
  const [editProject, setEditProject] = useState(null)
  const [isDoneReject, setDoneRejectClick] = useState(false)

  const _deepCopy = (str) => JSON.parse(JSON.stringify(str))

  const onRejectNow = async () => {
    setDoneRejectClick(true)
    try {
      const url = `${BASE_API_URL}/api/v1/project/${project._id}`
      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          status: 'Reject',
        }),
      }
      const response = await fetch(url, options)
      if (!response.ok) throw response
      message.success('Rejected Successfully')
      setParentProject({
        status: 'Reject',
      })
    } catch (e) {
      console.log(e)
    }
  }

  const onConenectWith = async (user) => {
    const Console = console
    Console.log(authInfo)
    setParentProject({
      status: 'Working',
      acceptedBy: user,
      assignedBy: authInfo,
    })

    try {
      const url = `${BASE_API_URL}/api/v1/project/${project._id}`
      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          status: 'Working',
          acceptedBy: user._id,
        }),
      }
      const response = await fetch(url, options)
      if (!response.ok) throw response
      message.success('Updated Successfully')
    } catch (e) {
      message.error(e.message)
    }
  }

  const ContactUser = ({ user }) => (
    <div className="Container">
      <Row gutter={[8, 8]}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 2 }}>
          <img className="img" src={BASE_API_URL + user.image} alt="UserProfile" />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 4 }}>
          <p>{user.name}</p>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 4 }}>
          <p>{user.role}</p>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 5 }}>
          <p>{user.email}</p>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 5 }}>
          <p style={{ color: 'blue' }}>{user.phone}</p>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 4 }}>
          { project.status === 'Pending'
            ? <div className="Button" onClick={() => onConenectWith(user)}> Connect Him </div>
            : (
              <div className="text-center isWorking">
                Project is
                {' '}
                {project.status}
              </div>
            )}
        </Col>
      </Row>
      <style jsx>
        {`
				p {
					margin: 0;
					padding-top: 3px;
				}
				.Container {
					background: #f9f9f9;
					padding: .3rem .5rem 0rem .5rem;
					border-radius: 1rem;
					margin-bottom: .5rem;
					text-align: center;
				}
				.img {
					width: 30px;
					height: 30px;
					border-radius: 30px;
					object-fit: cover;
					object-position: center center;
				}
				.text-center {
					text-align: center
				}
				.Button {
					border: 1px solid #1aa0c4;
					border-radius: 1rem;
					cursor: pointer;
					background: #edffff;
					font-weight: bold;
					color: #1aacc4;
					text-align: center;
				}
				.isWorking {
					background: #dfdfdf;
					border-radius: 3px;
				}
			`}

      </style>
    </div>
  )

  useEffect(() => {
    setEditProject(_deepCopy(project))
  }, [project])

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>


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

          { project && project.status === 'Pending' && !isDoneReject && (
          <div className="Container">
            <div className="ContactNow" onClick={onRejectNow}> Reject ? </div>
          </div>
          )}

          <div className="Container">
            <h3> Contact List </h3>
            { project && project.contactUsers.length > 0 && (
              project.contactUsers.map((user) => <ContactUser key={user._id} user={user} />)
            ) }
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

					.ContactNow {
						border: 1px solid #c41a61;
						border-radius: 1rem;
						padding: 0 2rem;
						cursor: pointer;
						background: #ffedf3;
						font-weight: bold;
						color: #c41a1a;
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
