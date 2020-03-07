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
import FileUpload from '../Upload/FileUpload'
import { BASE_API_URL } from '../../../../config'

const QuillNoSSRWrapper = dynamic(
  import('react-quill'), { ssr: false, loading: () => <p>Loading ...</p> },
)

const ImageContainer = ({ img }) => (
  <div
    className="Container height"
    style={{
      backgroundImage: img !== null ? img : '',
    }}
  >
    <img className="img" src={BASE_API_URL + img} alt="Project Data" />

    <style jsx>
      {`
				.Container {
					border-radius: 1rem;
					overflow: hidden;
					background: #fff;
					background-size: cover;
					background-position: center center;
					position: relative;
					margin-bottom: 1rem;
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

const Editor = ({ token }) => {
  const initImage = '/wallpaper/wallpaper.jpg'
  // ForceRender
  const [forceQuill, setForceQuill] = useState('ForceQuill')
  // Text Edit
  const [text, setText] = useState('')
  // Title Edit
  const [title, setTitle] = useState('')
  // Youtube
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [youtubeCaption, setYoutubeCaption] = useState('')
  // Image Edit
  const [image, setImage] = useState(initImage)
  // Is Loading
  const [isLoading, setLoading] = useState(false)

  // Set Image
  const _setImage = (img) => {
    setImage(img)
  }

  const clear = () => {
    setText('')
    setTitle('')
    setYoutubeUrl('')
    setYoutubeCaption('')
    setForceQuill(`ForceQuil${Math.random()}`)
    setImage(initImage)
  }

  const CreatePost = async () => {
    setLoading(true)
    try {
      const url = `${BASE_API_URL}/api/v1/blog`
      const payloads = {
        headImg: image,
        title,
        body: text,
        youtubeUrl,
        youtubeCaption,
      }
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payloads),
      }
      const response = await fetch(url, options)
      if (!response.ok) throw response
      message.success('Successfully Updated')
      clear()
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
        <Col xs={{ span: 24 }}>
          <FileUpload
            token={token}
            setImage={_setImage}
            type=""
            id=""
          />
          <ImageContainer img={image} />
        </Col>

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
            <div style={{ marginBottom: '1rem' }}>
              <QuillNoSSRWrapper
                modules={modules}
                formats={formats}
                defaultValue={text}
                key={forceQuill}
                onChange={(e) => setText(e)}
                theme="snow"
              />
            </div>
            <input
              type="text"
              className="CustomInput"
              placeholder="If You Wanna Attach Youtube Url"
              disabled={isLoading}
              readOnly={isLoading}
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
            />
            <input
              type="text"
              className="CustomInput"
              placeholder="Caption"
              disabled={isLoading}
              readOnly={isLoading}
              value={youtubeCaption}
              onChange={(e) => setYoutubeCaption(e.target.value)}
            />
            <br />
            <Button loading={isLoading} type="primary" onClick={() => CreatePost()}>
              Submit
            </Button>
          </div>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className="Container font-mm">
            <div> Preview </div>
            <h2>{title}</h2>
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
export default Editor
