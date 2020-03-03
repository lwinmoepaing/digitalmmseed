/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(
  import('react-quill'), { ssr: false, loading: () => <p>Loading ...</p> },
)

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' },
      { indent: '-1' }, { indent: '+1' }],
    ['image'],
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
  const [text, setText] = useState(null)
  return (
    <div>
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        defaultValue={defaultValue}
        onChange={(e) => setText(e)}
        theme="snow"
      />
      <button type="button" onClick={() => onSubmit(text)}> OnSubmiy </button>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}
export default Editor
