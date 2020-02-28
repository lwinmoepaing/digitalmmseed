import {
  Form, Icon, Button, notification,
} from 'antd'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useRouter } from 'next/router'

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  })
}

const ButtonStyle = {
  display: 'block',
  width: '100%',
  backgroundColor: '#1890ff',
  color: '#fff',
  border: 'none',
}

const LoginForm = ({
  Auth,
  onSubmitAuth,
}) => {
  const router = useRouter()
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const IconStyle = {
    color: 'rgba(0,0,0,.25)',
    position: 'absolute',
    left: 4,
    top: 7,
    display: 'inline-block',
    zIndex: 2,
  }

  const onSubmit = async () => {
    const Console = console

    try {
      const res = await onSubmitAuth(userName, userPassword)
      Console.log('res', res)
      openNotificationWithIcon('success', 'Login Info', 'Successfully Login')
      router.push(`/${res.authInfo.role.toLowerCase()}`)
    } catch (e) {
      const errorMessage = await (e.text())
      const { message = '', data = [] } = await JSON.parse(errorMessage)
      let mes = message
      if (data && data.length > 0) {
        mes = data.map(({ message: me }) => me).join('<br>')
      }
      openNotificationWithIcon('error', 'Login Info', mes)
    }
  }
  return (
    <div className="LoginFormContainer">
      <h3 className="text-center"> Login Page </h3>

      <div className="InputContainer">

        <Icon
          type="user"
          style={IconStyle}
        />

        <input
          className="Input"
          placeholder="Username"
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
      </div>

      <div className="InputContainer">

        <Icon
          type="lock"
          style={IconStyle}
        />

        <input
          className="Input"
          placeholder="Password"
          onChange={(e) => {
            setUserPassword(e.target.value)
          }}
        />
      </div>


      <Button
        disabled={!(userPassword && userName)}
        onClick={onSubmit}
        htmlType="button"
        loading={Auth.isLoading}
        style={ButtonStyle}
      >
        Log in
      </Button>
      <Form.Item>

        <span>
          Or
          <a href="#!" style={{ marginLeft: 3 }}>Register now!</a>
        </span>
      </Form.Item>
      <style jsx>
        {`
					.text-center {
						text-align: center;
					}
					.LoginFormContainer {
						max-width: 300px;
						background-color: #fff;
						border: 1px solid #dfdfdf;
						padding: 1rem;
						border-radius: .8rem;
						margin: 1rem auto;
					}

					.LoginFormButton {
						display: block;
						width: 100%;
					}

					.CustomButton {
						display: block;
						width: 100%;
						border-radius: 3px;
						border: 1px solid #dfdfdf;
						cursor: pointer;
					}

					.InputContainer {
						position: relative;
						margin-bottom: 1rem;
					}

					.Input {
						width: 100%;
						display: block;
						position: relative;
						padding: 3px 20px;
						border: 1px solid #dfdfdf;
						border-radius: 3px;
					}

					.Input::-webkit-input-placeholder {
						color: #dfdfdf;
					}

					.Input::placeholder  {
						color: #dfdfdf;
					}
				`}
      </style>
    </div>
  )
}

LoginForm.propTypes = {
  Auth: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  onSubmitAuth: PropTypes.func.isRequired,
}

export default LoginForm
