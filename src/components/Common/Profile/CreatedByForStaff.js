import { BASE_API_URL } from '../../../../config'

/* eslint-disable react/prop-types */
const CreatedBy = ({ profile, title }) => (
  <div className="Container font-en">

    <div className="ImageContainer">
      <img alt="Profile Pic" src={BASE_API_URL + profile.image} />
    </div>

    <h2 className="text-center">
      {' '}
      {title}
      {' '}
      By
      {' '}
    </h2>

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
					margin-bottom: 1rem;
				}

				.text-center {
					text-align: center;
				}

				.ImageContainer {
					text-align: center;
					margin: 0 auto;
				}
				.ImageContainer > img {
					width: 50px;
					height: 50px;
					border-radius: 50px;
					object-fit: cover;
					object-position: center center;
				}
			`}
    </style>
  </div>
)

export default CreatedBy
