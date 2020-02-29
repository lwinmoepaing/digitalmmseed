/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import TwoTreeLoading from '../SVG/TwoTreeLoading'

const Loading = ({ type }) => (
  <div className="LoadingContainer">
    <TwoTreeLoading style={{
      width: type === 'sm' ? 80 : type === 'xs' ? 50 : 130,
      height: 'auto',
    }}
    />

    {type === 'xs' ? null : (
      <div>
        Loading ...
      </div>
    )}

    <style jsx>
      {`
				.LoadingContainer {
					text-align: center;
				}
			`}
    </style>
  </div>
)

export default Loading
