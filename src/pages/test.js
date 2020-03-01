import { Modal, Button } from 'antd'
import { useState } from 'react'

const App = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <Button type="dashed" onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Testing Account For ( WIT project )"
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <div className="modalContainer">
          <p> Admin : admin@gmail.com</p>
          <p> Admin Password: 123456 </p>
        </div>
        <div className="modalContainer">
          <p> Staff : staff@gmail.com</p>
          <p> Staff Password: 123456 </p>
        </div>
        <div className="modalContainer">
          <p> Farmer : farmer@gmail.com</p>
          <p> Farmer Password: 123456 </p>
        </div>
        <div className="modalContainer">
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
				`}
      </style>
    </div>
  )
}


export default App
