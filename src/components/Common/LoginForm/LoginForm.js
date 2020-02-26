import {
  Form, Icon, Input, Button,
} from 'antd'
import PropTypes from 'prop-types'
// import { useState } from 'react'

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
  // const { name, age } = Auth.info
  const Console = console
  Console.log('Auth', Auth)
  Console.log('Store', onSubmitAuth)
  return (
    <div className="LoginFormContainer">
      <h3> Login Page </h3>

      <p>
        {
					Auth.authInfo ? Auth.authInfo.name + Auth.authInfo.age : 'Mashi'
				}
      </p>

      <Form className="login-form">
        <Form.Item>

          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>

          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />

        </Form.Item>
        <Button
          onClick={() => onSubmitAuth()}
          htmlType="button"
          loading={Auth.isLoading}
          style={ButtonStyle}
        >
          Log in
        </Button>
        <Form.Item>

          Or
          <a href="#!">register now!</a>
        </Form.Item>
      </Form>
      <style jsx>
        {`
					.LoginFormContainer {
						max-width: 300px;
						background-color: #fff;
						border: 1px solid #dfdfdf;
						padding: 1rem;
						border-radius: 5px;
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
