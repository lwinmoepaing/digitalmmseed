import { Spin } from 'antd'

const Loading = () => (
  <div className="LoadingContainer">
    <div className="SpinContainer">
      <Spin spinning tip="Loading..." size="large" />
    </div>
    <style jsx>
      {`
					.LoadingContainer {
						min-height: 290px;
						width: 100%;
						position: relative
					}
					.SpinContainer {
						display: inline-block;
						margin: 0 auto;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
					}
			`}

    </style>
  </div>
)

export default Loading
