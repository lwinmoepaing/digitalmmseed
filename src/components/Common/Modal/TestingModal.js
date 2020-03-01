import { Modal, Button } from 'antd'
import { useState } from 'react'

const App = ({ t }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="Container font-mm">


      <Button type="dashed" block onClick={() => setVisible(true)}>
        {t('TestingAcc')}
      </Button>
      <Modal
        title={t('TestingAccMessage')}
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <div className="modalContainer font-en">
          <p> Admin : admin@gmail.com</p>
          <p> Admin Password: 123456 </p>
        </div>
        <div className="modalContainer font-en">
          <p> Staff : staff@gmail.com</p>
          <p> Staff Password: 123456 </p>
        </div>
        <div className="modalContainer font-en">
          <p> Farmer : farmer@gmail.com</p>
          <p> Farmer Password: 123456 </p>
        </div>
        <div className="modalContainer font-en">
          <p> User : user@gmail.com</p>
          <p> User Password: 123456 </p>
        </div>

      </Modal>
      <style jsx>
        {`
					p {
						margin: 0;
					}

					.modalContainer {
						padding: .5rem;
						border-radius: 1rem;
						background: #e8e8e8;
						margin: .5rem 0;
					}

					.Container {
						width: 300px;
    				margin: 0 auto;
					}
				`}
      </style>
    </div>
  )
}


export default App
