/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from 'antd'
import { BASE_API_URL } from '../../../../config'

const CustomCard = ({ payload }) => (
  <div className="CardContainer" key={`${Math.random()}`}>
    <div className="Card">
      <div className="CardHeader">
        <img className="CardImage" src={`${BASE_API_URL}/${payload.headImg}`} alt="CardImage" />
        <div className="CardProfile">
          <img className="CardImage" src={`${BASE_API_URL}/${payload.user.image}`} alt="CardImage" />
        </div>
        <div className="CardUserName">
          { payload.user.name }
        </div>
        <div className="CardCategory">
          <span className="CardCategoryText">
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
            { payload.body.join('. ')}
          </p>
        </div>
        <div className="CardFooter">
          <Button className="heartBeat" size="small" shape="round" type="primary" icon="check"> Invest Now </Button>
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
						height: 290px;
						margin: 0 auto;
						border: 1px solid #dfdfdf;
						cursor: pointer;
						background: #fff;
						overflow: hidden;
					}

					.CardHeader {
						background-color: #ccc;
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
						display: -webkit-box!important;
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
						white-space: normal;
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


)

export default CustomCard
