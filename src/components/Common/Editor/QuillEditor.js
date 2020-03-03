/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Row, Col, Button } from 'antd'

const QuillNoSSRWrapper = dynamic(
  import('react-quill'), { ssr: false, loading: () => <p>Loading ...</p> },
)

const modules = {
  toolbar: [
    [{ header: '2' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['clean'],
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

const Editor = ({ defaultValue = '', onSubmit }) => {
  // Text Edit
  const [text, setText] = useState(null)
  // Image Edit

  // Is Loading

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }}>
          <div className="Container">
            <h1> Image</h1>
          </div>
        </Col>

        <Col xs={{ span: 12 }}>
          <div className="Container">
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              defaultValue={defaultValue}
              onChange={(e) => setText(e)}
              theme="snow"
            />
            <br />
            <Button type="primary" onClick={() => onSubmit(text)}>
              Submit
            </Button>
          </div>
        </Col>

        <Col xs={{ span: 12 }}>
          <div className="Container font-mm" dangerouslySetInnerHTML={{ __html: text }} />
        </Col>
      </Row>

      <style jsx>
        {`
				.Container {
					padding: 1rem;
					background: #ffffff;
					border-radius: 1rem;
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
