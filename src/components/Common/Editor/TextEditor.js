/* eslint-disable react/prop-types */
import { useState } from 'react'

const TextEditor = ({ project }) => {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="Container">

      <div>
        {	isEdit && (
        <input
          type="text"
          className="CustomInput"
          placeholder="Enter Project Title"
          value={project.title}
        />
        )}

        {!isEdit && <h3>{ project.title}</h3>}
      </div>

      <style jsx>
        {`
					.Container {
						border-radius: 1rem;
						padding: 1rem;
						background: #fff;
						background-size: cover;
						background-position: center center;
						position: relative;
					}

					.CustomInput {
						width: 100%;
						background: #f9f9f9;
						border: 1px solid #efefef;
						border-radius: 1rem;
						padding: 2px 9px;
					}
				`}
      </style>
    </div>
  )
}

export default TextEditor
