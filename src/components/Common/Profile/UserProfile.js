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
import FileUpload from '../Upload/FileUpload'
import { BASE_API_URL } from '../../../../config'

const UserProfile = ({ token, t }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [inputLoading, setInputLoading] = useState(false)
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
    profi.skills = _deepCopy(value)
    setEditProfile(_deepCopy(profi))
  }
  const validatePayload = ({ name, phone }) => {
    const errors = []

    if (!name) {
      errors.push('Name is Required')
    }

    if (!phone) {
      errors.push('Phone is Required')
    }

    if (phone === '' || phone.trim() === '') {
      errors.push('Phone should not emply')
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }

  const onSubmitUpdate = async () => {
    const payloads = {
      name: editProfile.name,
      phone: editProfile.phone,
      skills: editProfile.skills,
    }

    const { isValid, errors } = validatePayload(payloads)

    if (!isValid) {
      errors.forEach((mes) => {
        message.error(mes)
      })
      return
    }

    setInputLoading(true)
    try {
      const url = `${BASE_API_URL}/api/v1/user/${profile._id}`
      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payloads),
      }
      const response = await fetch(url, options)
      if (!response.ok) throw response
      message.success('Successfully Updated')
      console.log('profile', profile)
      setProfile({
        ...profile,
        ...payloads,
      })
      setInputLoading(false)
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
      setInputLoading(false)
    }
  }

  const _setImage = (img) => {
    const update = {
      ...profile,
      image: img,
    }
    setProfile(update)
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
            <h3>
              {' '}
              {t('User Name')}
              {' '}
            </h3>

            {	isEdit && (
            <input
              type="text"
              id="UserName"
              className="CustomInput"
              placeholder={t('Enter Name')}
              defaultValue={profile.name}
              disabled={inputLoading}
              readOnly={inputLoading}
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
            <h3>
              {' '}
              {t('Phone')}
              {' '}
            </h3>
            {	isEdit && (
            <input
              type="text"
              id="Userphone"
              className="CustomInput"
              placeholder={t('Enter Phone')}
              defaultValue={profile.phone}
              disabled={inputLoading}
              readOnly={inputLoading}
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
            <h3>
              {' '}
              {t('Skills')}
              {' '}
            </h3>
            {isEdit && (
            <Select
              disabled={inputLoading}
              mode="tags"
              style={{ width: '100%' }}
              defaultValue={editProfile.skills}
              placeholder="Tags Mode"
              onChange={changeSkills}
            />
            )}
            {!isEdit && (
            <p>
              { profile.skills.join(', ')}
            </p>
            )}
          </div>

          <div className="FieldContainer">
            <h3>
              {' '}
              {t('Role')}
              {' '}
            </h3>
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
              loading={inputLoading}
            >
              {t('Submit')}
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

        { !isLoading && profile && (
        <div className="Container">

          <div className="imgContainer">
            <img src={BASE_API_URL + profile.image} alt="profilepicture" />
          </div>

          <FileUpload
            token={token}
            type="userId"
            id={profile._id}
            setImage={_setImage}
            align="center"
          />
        </div>
        )}
      </Col>
      <style jsx>
        {`
					.Container {
						padding: 1rem;
						background-color: #ffffff;
						border-radius: 1rem;
						position: relative;
						box-shadow:  7px 7px 14px #e0e0e0,
             -7px -7px 14px #ffffff;
					}

					.FieldContainer {
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
						background: #ffffff;
						border: 1px solid #dfdfdf;
						border-radius: 3px;
						padding: 2px 9px;
					}

					.imgContainer {
						width: 120px;
						height: 120px;
						margin: 0 auto;
						border-radius: 120px;
   					overflow: hidden;
						margin-bottom: 1.5rem;
					}

					.imgContainer >img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						object-position: center center;
					}
				`}
      </style>
    </Row>
  )
}

export default UserProfile
