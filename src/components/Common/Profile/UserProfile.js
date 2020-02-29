/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import {
  Row, Col, message, Select, Button,
} from 'antd'
import {
  CloseOutlined,
  EditFilled,
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import EditorLoading from '../Editor/EditorLoading'
import { BASE_API_URL } from '../../../../config'

const UserProfile = ({ token }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isEdit, setIsEdit] = useState(false)
  const [profile, setProfile] = useState(null)
  const [editProfile, setEditProfile] = useState(null)

  const _deepCopy = (str) => JSON.parse(JSON.stringify(str))

  const _onEdit = () => {
    const toChange = !isEdit
    if (toChange) {
      setEditProfile(_deepCopy(profile))
    }
    setIsEdit(toChange)
  }

  const fetchData = async () => {
    try {
      const url = `${BASE_API_URL}/api/v1/auth/me`
      const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      }
      const response = await fetch(url, options)
      const { data } = await response.json()
      setProfile(data)
      setIsLoading(false)
    } catch (e) {
      message.error(e.message)
      setIsLoading(false)
      setProfile(null)
    }
  }

  function changeSkills(value) {
    const profi = _deepCopy(editProfile)
    profi.skills = value.split(',')
    setEditProfile(_deepCopy(profi))
  }

  const onSubmitUpdate = async () => {
    const payloads = {
      name: editProfile.name,
      phone: editProfile.phone,
      skills: editProfile.skills,
    }

    console.log('payloads', payloads)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const _onChange = async (e, key) => {
    const changeEdit = {
      ...editProfile,
    }

    changeEdit[key] = _deepCopy(e.target.value)
    setEditProfile(_deepCopy(changeEdit))
  }

  const ButtonStyle = {
    display: 'block',
    width: '100%',
    backgroundColor: '#1890ff',
    color: '#fff',
    border: 'none',
    marginTop: '1rem',
  }

  return (
    <Row gutter={[16, 16]}>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        { isLoading && (
        <div className="Container">
          <EditorLoading />
        </div>
        )}
        { !isLoading && profile && (
        <div className="Container">
          { profile && (
          <div className={isEdit ? 'CloseButton' : 'EditButton'}>
            {isEdit
              ? <CloseOutlined onClick={_onEdit} />
              : <EditFilled onClick={_onEdit} />}
          </div>
          )}
          <div className="FieldContainer">
            <h3> User Name </h3>

            {	isEdit && (
            <input
              type="text"
              id="UserName"
              className="CustomInput"
              placeholder="Enter Name"
              defaultValue={profile.name}
              disabled={isLoading}
              readOnly={isLoading}
              onChange={(e) => _onChange(e, 'name')}
            />
            )}
            {	!isEdit && (
            <p>
              { profile.name }
            </p>
            )}
          </div>
          <div className="FieldContainer">
            <h3> Phone </h3>
            {	isEdit && (
            <input
              type="text"
              id="Userphone"
              className="CustomInput"
              placeholder="Enter Phone"
              defaultValue={profile.phone}
              disabled={isLoading}
              readOnly={isLoading}
              onChange={(e) => _onChange(e, 'phone')}
            />
            )}
            {	!isEdit && (
            <p>
              { profile.phone }
            </p>
            )}
          </div>

          <div className="FieldContainer">
            <h3> Skills </h3>
            {isEdit && (
            <Select mode="tags" style={{ width: '100%' }} defaultValue={editProfile.skills} placeholder="Tags Mode" onChange={changeSkills} />
            )}
            {!isEdit && (
            <p>
              { profile.skills.join(', ')}
            </p>
            )}
          </div>

          <div className="FieldContainer">
            <h3> Role </h3>
            <p>
              { profile.role }
            </p>
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
        )}
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        { isLoading && (
        <div className="Container">
          <EditorLoading />
        </div>
        )}

        <div className="Container">
          Lorem
        </div>
      </Col>
      <style jsx>
        {`
					.Container {
						padding: 1rem;
						background-color: #ffffff;
						border-radius: 1rem;
						position: relative;
					}

					.FieldContainer {
						background: #f5f5f5;
						padding: .8rem;
						border-radius: 1rem;
						margin-bottom: .5rem;
					}

					.FieldContainer > p {
						margin: 0;
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

					.CustomInput {
						width: 100%;
						background: #f9f9f9;
						border: 1px solid #efefef;
						border-radius: 3px;
						padding: 2px 9px;
					}
				`}
      </style>
    </Row>
  )
}

export default UserProfile
