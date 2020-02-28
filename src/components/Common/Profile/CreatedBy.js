/* eslint-disable react/prop-types */
const CreatedBy = ({ profile }) => (
  <div className="Container font-en">
    <h2 className="text-center"> Created By </h2>

    <p>
      {`Name: ${profile.name}` }
    </p>
    <p>
      {`Role: ${profile.role}` }
    </p>
    <p>
      {`Email: ${profile.email}` }
    </p>
    <p>
      {`Phone: ${profile.phone}` }
    </p>

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
				}
			`}
    </style>
  </div>
)

export default CreatedBy
