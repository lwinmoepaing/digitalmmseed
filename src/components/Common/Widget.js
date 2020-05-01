/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import TwoTreeLoading from './SVG/TwoTreeLoading'

export const Loading = () => (
  <div className="TreeContainer">
    <div className="TreeLoadingContainer" style={{ textAlign: 'center' }}>
      <TwoTreeLoading style={{ width: 90, height: 'auth' }} />
      <div style={{ textAlign: 'center', color: 'green' }}> Loading ...</div>
    </div>
    <style jsx>
      {`
					.TreeContainer {
						background: #ffffff;
						box-shadow:  20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;
						border-radius: 10px;
						padding: 1rem;
					}
					.TreeLoadingContainer {
						max-width: 100px;
						margin: 0 auto;
					}
				`}
    </style>
  </div>
)

const Widget = (props) => {
  const { isLoading, title, count } = props

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="CustomCardStyle">
      <div>
        <div className="Count">
          <div className="IconContainer">
            { props.children }
          </div>
          { count }
        </div>
        <h3 className="Title">
          {title}
        </h3>
      </div>
      <style jsx>
        {`
					.CustomCardStyle {
						border-radius: 10px;
						padding: 1.5rem 1rem;
						background: #ffffff;
						box-shadow:  20px 20px 60px #d9d9d9,
						-20px -20px 60px #ffffff;
					}

					.IconContainer {
						position: absolute;
						top: 47%;
						left: 1.5rem;
						transform: translateY(-50%);
					}

					.Title {
						text-align: center;
						color: #97c41a;
					}

					.Count {
						text-align: center;
						color: #97c41a;
						font-size: 3rem;
						line-height: 3rem;
					}
				`}
      </style>

    </div>
  )
}

export default Widget
