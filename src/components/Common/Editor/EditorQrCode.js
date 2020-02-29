/* eslint-disable react/prop-types */
import QRCode from 'qrcode.react'
import { memo, useState, useEffect } from 'react'

const EditorQRCode = ({ id }) => {
  const [showId, setShowId] = useState(id || 'defaultString')

  useEffect(() => {
    setShowId(id || 'defaultString')
  }, [id])

  return (
    <div className="Container font-en">
      <h3 className="text-center">
        QrCode
      </h3>
      <div className="text-center pb-1">
        <QRCode value={showId} fgColor="#47e847" level="M" bgColor="#ffffff" />
      </div>
      <style jsx>
        {`
			.Container {
				border-radius: 1rem;
				padding: .5rem;
				background: #ffffff;
				margin-bottom: 1rem;
			}

			.text-center {
				text-align: center
			}

			.pb-1 {
				padding-bottom: 1rem
			}
		`}
      </style>
    </div>
  )
}

export default memo(EditorQRCode)
