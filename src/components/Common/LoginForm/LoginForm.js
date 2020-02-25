import {
  Form, Icon, Input, Button,
} from 'antd'

import { useState } from 'react'

const LoginForm = () => {
  const [isLoading, setLoading] = useState(false)

  return (
    <div className="LoginFormContainer">
      <h3> Login Page</h3>

      <Form onSubmit={() => {}} className="login-form">
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
        <Form.Item>
          <Button
            type="success"
            onClick={() => setLoading(!isLoading)}
            htmlType="submit"
            loading={isLoading}
            style={{ display: 'block', width: '100%' }}
          >
            Log in
          </Button>
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
						margin: 0 auto;
					}

					.LoginFormButton {
						display: block;
						width: 100%;
						background: #1890ff;
					}
				`}
      </style>
    </div>
  )
}


export default LoginForm
