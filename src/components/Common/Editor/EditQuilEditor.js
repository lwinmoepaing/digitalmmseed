/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Row, Col, Button } from 'antd'
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

const Editor = ({ defaultValue = '', onSubmit, token }) => {
  // Text Edit
  const [text, setText] = useState(null)
  // Image Edit
  const [image, setImage] = useState('/wallpaper/wallpaper.jpg')
  // Is Loading
  const [isLoading, setLoading] = useState(true)

  // Set Image
  const _setImage = (img) => {
    setImage(img)
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
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              defaultValue={defaultValue}
              onChange={(e) => setText(e)}
              theme="snow"
            />
            <br />
            <Button loading={isLoading} type="primary" onClick={() => onSubmit(text)}>
              Submit
            </Button>
          </div>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className="Container font-mm" dangerouslySetInnerHTML={{ __html: text }} />
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
				`}

      </style>
    </div>
  )
}
export default Editor
