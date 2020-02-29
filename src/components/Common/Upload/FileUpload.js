/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Upload, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { BASE_API_URL } from '../../../../config'

const FileUpload = ({
  token, id, setImage, align, type,
}) => {
  const [cusFile, setCusFile] = useState([])

  const fileProps = {
    name: 'image',
    action: `${BASE_API_URL}/api/v1/image?${type}=${id}`,
    headers: {
      authorization: `Bearer ${token}`,
    },

    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
        const { url } = info.file.response.image
        setImage(url)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }

      let fileList = [...info.fileList]
      fileList = fileList.slice(-1)
      fileList = fileList.map((file) => {
        if (file.response) {
          file.url = file.response.url
        }
        return file
      })
      setCusFile(fileList)
    },

    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 1
      if (!isLt2M) {
        message.error('Image must smaller than 1MB!')
      }
      return isJpgOrPng && isLt2M
    },
  }

  const alignStyle = align === 'center' ? {
    left: '50%',
    position: 'absolute',
    bottom: 73,
    transform: 'translateX(-50%)',
  } : {}

  return (
    <div className="Container font-en">
      <Upload {...fileProps} fileList={cusFile}>
        <Button type="dashed" style={alignStyle}>
          <UploadOutlined />
          Upload Image
        </Button>
      </Upload>
      <style jsx>
        {`
					.Container {
						width: 100%;
						background: #fff;
						padding: 1rem;
						border-radius: 1rem;
						margin-bottom: 1rem;
					}
				`}
      </style>
    </div>
  )
}


export default FileUpload
