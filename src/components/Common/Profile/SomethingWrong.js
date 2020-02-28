/* eslint-disable react/prop-types */
const SomethingWrong = () => (
  <div className="Container font-en">
    <h2 className="text-center"> Something Went Wrong Bro!! </h2>

    <style jsx>
      {`
				.Container {
					border-radius: 1rem;
					padding: 1rem;
					background: #fff;
					background-size: cover;
					background-position: center center;
				}

				.text-center {
					text-align: center;
					color: red;
				}
			`}
    </style>
  </div>
)

export default SomethingWrong
