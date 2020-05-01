/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BASE_API_URL } from '../../../../config'
import { Router } from '../../../i18n'
import CustomTilt from '../CustomTilt'

const CardContactToFarmer = ({ payload, edit }) => {
  const profileImage = `${BASE_API_URL}${payload.user.image}`
  const headImage = `${BASE_API_URL}${payload.headImg}`
  // const router = useRouter()
  const goDetail = () => {
    if (edit === true) return
    Router.push(`/user/farmer-projects/_id?id=${payload._id}`, `/user/farmer-projects/${payload._id}`, { shallow: true })
  }

  const Status = () => {
    const { status } = payload
    const style = status === 'Pending' ? {
      background: '#f9dca8',
    } : status === 'Reject' ? {
      background: '#ff9a9a',
    } : status === 'Expired' ? {
      background: '#dfdfdf',
    } : status === 'Working' ? {
      background: '#00effb',
    } : {
      background: '#53fb48',
    }

    return (
      <span className="Status" style={style}>
        {payload.status}

        <style jsx>
          {`.Status {
						display: inline-block;
						background: red;
						padding: 0 1rem;
						border-radius: 1rem;
						box-shadow:  4px 4px 8px #e6e6e6,
             -4px -4px 8px #ffffff;
					}`}

        </style>
      </span>
    )
  }

  return (
    <CustomTilt rotateSpeed={18}>
      <div className="CardContainer">
        <div className="Card" onClick={goDetail}>
          <div className="CardHeader">
            <img className="CardImage" src={headImage} alt="CardImage" />
            <div className="CardProfile">
              <img className="CardImage" src={profileImage} alt="CardImage" />
            </div>
            <div className="CardUserName">
              { payload.user.name }
            </div>
            <div className="CardCategory">
              <span className="CardCategoryText font-en">
                {payload.projectCategory}
              </span>
            </div>
          </div>
          <div className="CardBody">
            <div className="CardTitle">
              { payload.title }
            </div>
            <div className="CardParaContainer">
              <p className="CardParaText">
                { payload.body[0]}
              </p>
            </div>
            <div className="CardFooter">
              <Status />
            </div>
          </div>
        </div>
        <style jsx>
          {`
						.CardContainer {
							min-height: 150px;
						}

						.Card {
							border-radius: 7px;
							max-width: 216px;
							min-height: 290px;
							margin: 0 auto;
							cursor: pointer;
							background: #ffffff;
							box-shadow:  20px 20px 60px #d9d9d9,
													-20px -20px 60px #ffffff;
							overflow: hidden;
						}

						.CardHeader {
							background-color: #f3f3f3;
							height: 122px;
							position: relative;
						}

						.CardImage {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}

						.CardBody {
							padding: 0 .3em;
						}

						.CardProfile {
							display: inline-block;
							background: #eee;
							width: 40px;
							height: 40px;
							position: absolute;
							left: .3em;
							bottom: -20px;
							border-radius: 25px;
							overflow: hidden;
							border: 2px solid #fff;
						}

						.CardUserName {
							position: absolute;
							bottom: .2em;
							left: 54px;
							font-size: 0.9em;
							background: #ffffff75;
							padding: 0 .5em;
							border-radius: 3px;
						}

						.CardCategory {
							position: absolute;
							bottom: -23px;
							font-size: .8em;
							max-height: 1.1rem;
							left: 54px;
							display: inline-block;
							background: #f4c150;
							padding: 0 8px 0 3px;
							z-index: 3;
							border-radius: 4px 2px 2px 4px;
						}
						.CardCategoryText {
							display: inline-block;
							overflow: hidden;
							max-width: 109px;
							white-space: nowrap;
							text-overflow: ellipsis;
							position: relative;
						}
						.CardCategory:before {
							background: inherit;
							content: '';
							height: 13px;
							position: absolute;
							top: 2px;
							transform: rotate(45deg);
							width: 13px;
							z-index: 0;
							display: block;
							border-radius: 2px;
							right: -6px;
						}

						.CardTitle {
							display: blockimportant;
							-webkit-line-clamp: 2;
							-moz-line-clamp: 2;
							-ms-line-clamp: 2;
							-o-line-clamp: 2;
							line-clamp: 2;
							-webkit-box-orient: vertical;
							-moz-box-orient: vertical;
							-ms-box-orient: vertical;
							-o-box-orient: vertical;
							box-orient: vertical;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;;
							font-weight: 600;
							height: 45px;
							padding-top: 26px;
							font-size: 15px;
							color: #29303b;
							margin-bottom: 6px;
						}

						.CardParaContainer {
							position: relative;
							height: 80px;
							overflow: hidden;
						}

						.CardParaContainer:after {
							content: "";
							height: 70px;
							width: 100%;
							bottom: 0;
							background: rgb(255,255,255);
							background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(252,252,252,0) 90%, rgba(0,212,255,0) 100%);
							position: absolute;
						}

						.CardParaText {
							padding: 0;
							margin: 0;
							font-size: .8em;
							height: 60px;
							overflow: hidden;
						}

						.CardFooter {
							text-align: center;
						}


					`}
        </style>

      </div>
    </CustomTilt>
  )
}
export default CardContactToFarmer
