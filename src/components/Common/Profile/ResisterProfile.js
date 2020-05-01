/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import {
  Row, Col, message, Select, Button, Radio,
} from 'antd'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import { BASE_API_URL } from '../../../../config'

const RegisterProfile = ({ token, type = 'User', t }) => {
  const initProfile = {
    name: '',
    email: '',
    role: 'User',
    phone: '',
    password: '',
    skills: [],
  }

  const router = useRouter()

  const [inputLoading, setInputLoading] = useState(false)

  const _deepCopy = (str) => JSON.parse(JSON.stringify(str))

  const [profile, setProfile] = useState(_deepCopy(initProfile))

  function changeSkills(value) {
    const profi = _deepCopy(profile)
    profi.skills = _deepCopy(value)
    setProfile(_deepCopy(profi))
  }

  const validatePayload = ({
    name, phone, password, email,
  }) => {
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

    const phRegex = new RegExp('(?=^(09))([0-9]{6,11})$|(?=^(01))([0-9]{6,8})$')
    if (phone && !phRegex.test(phone)) {
      errors.push('Phone Pattern Must Be 09-----')
    }

    if (!password) {
      errors.push('Password is Required')
    }

    if (password === '' || password.trim() === '') {
      errors.push('Password should not emply')
    }

    if (password && password.length < 6) {
      errors.push('Password length must be at least 6 characters long')
    }

    const emailRegx = /\S+@\S+\.\S+/
    if (!emailRegx.test(email)) {
      errors.push('Email Not Valid')
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }

  const onSubmitUpdate = async () => {
    const { isValid, errors } = validatePayload(profile)

    if (!isValid) {
      errors.forEach((mes) => {
        message.error(mes)
      })
      return
    }
    setInputLoading(true)


    try {
      const url = `${BASE_API_URL}/api/v1/auth`
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(profile),
      }
      const response = await fetch(url, options)
      if (!response.ok) throw response
      message.success('Successfully Register')
      setProfile(_deepCopy(initProfile))
      setInputLoading(false)
      if (type === 'Guest') router.push('/login')
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

  const _onChange = async (e, key) => {
    const changeEdit = {
      ...profile,
    }

    changeEdit[key] = _deepCopy(e.target.value)
    setProfile(_deepCopy(changeEdit))
  }

  useEffect(() => {
    const el = document.getElementById('UserName')
    if (el) el.focus()
  }, [])

  const ButtonStyle = {
    display: 'block',
    width: '100%',
    backgroundColor: '#1890ff',
    color: '#fff',
    border: 'none',
    marginTop: '1rem',
  }

  return (
    <Row gutter={[16, 16]} justify="center">
      <Col xs={{ span: 24 }} md={{ span: type === 'Guest' ? 24 : 12 }}>
        <div className="Container">

          <h3 className="text-center">
            {' '}
            {t('Register Form')}
            {' '}
          </h3>

          <div className="FieldContainer">
            <h3>
              {' '}
              {t('User Name')}
              {' '}
            </h3>

            <input
              type="text"
              id="UserName"
              className="CustomInput"
              placeholder={t('Enter Name')}
              defaultValue={profile.name}
              value={profile.name}
              disabled={inputLoading}
              readOnly={inputLoading}
              onChange={(e) => _onChange(e, 'name')}
            />
          </div>

          <div className="FieldContainer">
            <h3>
              {' '}
              {t('Password')}
              {' '}
            </h3>

            <input
              type="password"
              id="UserPassword"
              className="CustomInput"
              placeholder={t('Enter Password')}
              defaultValue={profile.password}
              value={profile.password}
              disabled={inputLoading}
              readOnly={inputLoading}
              onChange={(e) => _onChange(e, 'password')}
            />
          </div>


          <div className="FieldContainer">
            <h3>
              {' '}
              {t('Email')}
              {' '}
            </h3>

            <input
              type="text"
              id="Email"
              className="CustomInput"
              placeholder={t('Enter Email')}
              defaultValue={profile.email}
              value={profile.email}
              disabled={inputLoading}
              readOnly={inputLoading}
              onChange={(e) => _onChange(e, 'email')}
            />
          </div>

          <div className="FieldContainer">
            <h3>
              {' '}
              {t('Phone')}
              {' '}
            </h3>

            <input
              type="text"
              id="Userphone"
              className="CustomInput"
              placeholder={t('Enter Phone')}
              defaultValue={profile.phone}
              value={profile.phone}
              disabled={inputLoading}
              readOnly={inputLoading}
              onChange={(e) => _onChange(e, 'phone')}
            />

          </div>

          <div className="FieldContainer">
            <h3>
              {' '}
              {t('Skills')}
              {' '}
            </h3>
            <Select
              disabled={inputLoading}
              mode="tags"
              style={{ width: '100%' }}
              placeholder="Tags Mode"
              onChange={changeSkills}
            />
          </div>

          <div className="FieldContainer">
            <h3>
              {' '}
              {t('Role')}
              {' '}
            </h3>
            <Radio.Group onChange={(e) => _onChange(e, 'role')} defaultValue={profile.role}>
              <Radio value="User">{t('User')}</Radio>
              <Radio value="Farmer">{t('Farmer')}</Radio>
              { type === 'Admin' && <Radio value="Staff">{t('Staff')}</Radio>}
            </Radio.Group>
          </div>

          <div>
            <Button
              onClick={onSubmitUpdate}
              htmlType="button"
              style={ButtonStyle}
              loading={inputLoading}
            >
              {t('Submit')}
            </Button>
          </div>

        </div>
      </Col>
      <style jsx>
        {`
					.Container {
						padding: 1rem;
						background-color: #ffffff;
						border-top-right-radius: 1rem;
						border-top-left-radius: 1rem;
						border-bottom-right-radius: 1rem;
						border-bottom-left-radius: 1rem;
						overflow: hidden;
						position: relative;
						box-shadow:  7px 7px 14px #e0e0e0;
					}

					.FieldContainer {
						padding: .8rem;
						border-radius: 1rem;
						margin-bottom: .5rem;
					}

					.FieldContainer > h3 {
						margin: .2rem 0;
						font-size: .8em;
					}

					.FieldContainer > input::placeholder {
						color: #bbbbbb;
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
						border: 1px solid #efefef;
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

					.text-center {
						text-align: center;
					}
				`}
      </style>
    </Row>
  )
}

export default RegisterProfile
