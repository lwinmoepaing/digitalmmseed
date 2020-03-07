/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
import {
  Row, Col, Button, message,
} from 'antd'
import { BASE_API_URL } from '../../../../config'

const QuillNoSSRWrapper = dynamic(
  import('react-quill'), { ssr: false, loading: () => <p>Loading ...</p> },
)

const modules = {
  toolbar: [
    [{ header: '2' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
]

const AuthContainer = ({ blog }) => (
  <div className="AuthContainer">
    <img src={BASE_API_URL + blog.author.image} alt="Profile Pic" />
    <p>
      written By
    </p>
    <p>
      { blog.author.name }
    </p>
    <style jsx>
      {`
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


const EditQuilEditor = ({
  token, blog, setParentUpdate, id, cancel,
}) => {
  const __deepCopy = (str) => JSON.parse(JSON.stringify(str))
  // Text Edit
  const [text, setText] = useState(__deepCopy(blog.body))
  // Title Edit
  const [title, setTitle] = useState(__deepCopy(blog.title))
  // Is Loading
  const [isLoading, setLoading] = useState(false)

  const EditPost = async () => {
    setLoading(true)
    try {
      const url = `${BASE_API_URL}/api/v1/blog/${id}`
      const payloads = {
        title,
        body: text,
      }
      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payloads),
      }
      const response = await fetch(url, options)
      if (!response.ok) throw response
      message.success('Successfully Updated')
      setParentUpdate(payloads)
      setLoading(false)
    } catch (e) {
      const errorMessage = await (e.text())
      const { message: mes, data = [] } = await JSON.parse(errorMessage)
      if (mes) { message.error(mes) }
      if (data !== null && data.length > 0) {
        data.forEach(({ message: mesArr }) => {
          message.error(mesArr)
        })
      }
      setLoading(false)
    }
  }


  return (
    <div>
      <Row gutter={[16, 16]}>

        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className="Container">
            <input
              type="text"
              id="Blog Title Text"
              className="CustomInput"
              placeholder="Enter Blog Title"
              disabled={isLoading}
              readOnly={isLoading}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              defaultValue={text}
              onChange={(e) => setText(e)}
              theme="snow"
            />
            <br />
            <Button loading={isLoading} type="primary" onClick={() => EditPost()}>
              Submit
            </Button>
            {' '}
            <Button loading={isLoading} type="dashed" onClick={cancel}>
              Cancel
            </Button>
          </div>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className="Container font-mm">
            <h2>
              {title}
            </h2>
            <AuthContainer blog={blog} />
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </Col>
      </Row>

      <style jsx>
        {`
					.Container {
						padding: 1rem;
						background: #ffffff;
						border-radius: 1rem;
						margin-bottom: 1rem;
					}

					.Container  img {
						width: 100%;
						height: auto;
					}

					.Container strong {
						font-weight: bold,
					}

					.Container > p {
						margin: 0;
					}

					.CustomInput {
						width: 100%;
						background: #f9f9f9;
						border: 1px solid #efefef;
						border-radius: 3px;
						padding: 2px 9px;
						margin-bottom: 1rem;
					}
				`}

      </style>
    </div>
  )
}
export default EditQuilEditor
