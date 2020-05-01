import PropTypes from 'prop-types'

const SupportBy = ({ t }) => (
  <div className="Container font-en">
    <p className="title"> Supported By </p>

    <img className="image" src="/svg/Wit.svg" alt="witImage" />

    <p className="title Spiceworks">  Wit from Spiceworks Myanmar  </p>
    <style jsx>
      {`
				.Container {
					padding: 1rem;
					width: 700px;
					max-width: 90%;
					margin: 1rem auto 2rem auto;
					border-radius: 1rem;
					font-family: GTWalsheimProRegular;
					background: #ffffff;
					box-shadow:  4px 4px 20px #dedede,
											-12px -12px 33px #ffffff;
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
