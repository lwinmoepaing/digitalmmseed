import Carousel from 'react-multi-carousel'
import { Button } from 'antd'

const Test = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  const Arr = Array.from({ length: 10 }).fill(1)
  return (
    <div style={{ maxWidth: 1400, border: '1px solid #dfdfdf', margin: '0 auto' }}>
      <h1> Lwin </h1>
      <Carousel
        responsive={responsive}
      >

        {Arr.map(() => (
          <div className="CardContainer" key={`${Math.random()}`}>
            <div className="Card">
              <div className="CardHeader">
                Img
                <div className="CardProfile"> Profile </div>
                <div className="CardUserName"> Lwin Moe Paing</div>
                <div className="CardCategory">
                  <span className="CardCategoryText">

                    lorem loremloremloremloremloremlorem lorem
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardTitle">
                  Bar Loat mal Nyar Loat mal
                  Bar Loat mal Nyar Loat mal
                  Bar Loat mal Nyar Loat mal
                </div>
                <div className="CardParaContainer">
                  <p className="CardParaText">
                    lorem
                    lorem
                    lorem
                    lorem
                    lorem
                    lorem
                    lorem
                    lorem
                  </p>
                </div>
                <div className="CardFooter">
                  <Button className="heartBeat" size="small" shape="round" type="primary" icon="align-right"> Invest Now </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <style jsx>
        {`
					.CardContainer {
						min-height: 150px;
						background: #fff;
					}

					.Card {
						border-radius: 3px;
						max-width: 216px;
						height: 290px;
						margin: 0 auto;
						border: 1px solid #bbb;
						cursor: default;
					}

					.CardHeader {
						background-color: #ccc;
						height: 122px;
						position: relative;
					}

					.CardBody {
						padding: 0 .3em;
					}

					.CardProfile {
						display: inline-block;
						background: red;
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
}

export default Test
