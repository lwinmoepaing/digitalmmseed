import PropTypes from 'prop-types'

const SupportBy = ({ t }) => (
  <div className="Container font-en">
    <p className="title"> Supported By </p>

    <img className="image" src="/svg/wit.svg" alt="witImage" />

    <p className="title Spiceworks">  Wit from Spiceworks Myanmar  </p>
    <style jsx>
      {`
				.Container {
					padding: 1rem;
					max-width: 700px;
					margin: 1rem auto;
					background: #fff;
					border-radius: 3px;
					font-family: GTWalsheimProRegular;
				}

				.title {
					text-align: center;
				}

				.image {
					display: block;
					width: 78px;
					margin: 0 auto;
				}

				.Spiceworks {
					padding: 1rem;
					margin: 0;
				}
			`}
    </style>
  </div>
)

SupportBy.propTypes = {
  t: PropTypes.func.isRequired,
}

export default SupportBy
