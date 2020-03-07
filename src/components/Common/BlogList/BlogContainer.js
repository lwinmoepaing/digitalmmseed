/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { EditFilled } from '@ant-design/icons'
import { BASE_API_URL } from '../../../../config'

const BlogContainer = ({
  blog, authInfo, isLoading, onChangeEdit,
}) => (
  <div className="Container">

    <h2>
      { blog.title }
      { blog && blog.author._id === authInfo._id && !isLoading && (
      <div className="EditButton" onClick={onChangeEdit}>
        <EditFilled />
        {' '}
        Edit
      </div>
      )}
    </h2>

    <div className="AuthContainer">
      <img src={BASE_API_URL + blog.author.image} alt="Profile Pic" />
      <p>
        written By
      </p>
      <p>
        { blog.author.name }
      </p>
    </div>

    <div dangerouslySetInnerHTML={{ __html: blog.body }} />
    <style jsx>
      {`
				.Container {
					background: #fff;
					border-radius: 1rem;
					padding: 1rem;
					position: relative;
				}
				.EditButton, .CloseButton {
					display: inline-block;
					width: 100px;
					font-size: 1rem;
					text-align: center;
					border-radius: 3px;
					background: #83ff83;
					cursor: pointer;
					color: #848484;
					transition: transform .2s ease-in-out;
					margin-left: 6px;
					position: relative;
					top: -4px;
				}

				.CloseButton {
					background: #ff9797;
					color: #fff;
				}
				.EditButton:hover {
					transform: scale(1.1) translateY(-1px);
				}
				.text-center {
					text-align: center
				}

				.AuthContainer {
					padding-left: 3rem;
					position: relative;
					margin-bottom: 1.5rem;
				}
				.AuthContainer > p {
					margin: 0;
				}
				.AuthContainer > img {
					width: 40px;
					height: 40px;
					position: absolute;
					left: 0;
					top: 0;
					border-radius: 40px;
					object-fit: cover;
					object-position: center center;
				}
			`}
    </style>
  </div>
)

export default BlogContainer
