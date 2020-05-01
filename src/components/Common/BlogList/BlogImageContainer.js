import { BASE_API_URL } from '../../../../config'

/* eslint-disable react/prop-types */
const BlogImageContainer = ({ blog }) => (
  <div
    className="Container height"
    style={{
      backgroundImage: blog !== null ? blog.headImg : '',
    }}
  >
    <img className="img" src={BASE_API_URL + blog.headImg} alt="Blog Data" />
    <style jsx>
      {`
				.Container {
					border-radius: 1rem;
					overflow: hidden;
					background: #fff;
					background-size: cover;
					background-position: center center;
					position: relative;
					width: 700px;
					margin: 0 auto 1rem auto;
					max-width: 90%;
					box-shadow:  20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;
				}

				.height {
					height: 190px;
				}

				.img {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center center;
				}
		`}

    </style>
  </div>
)

export default BlogImageContainer
