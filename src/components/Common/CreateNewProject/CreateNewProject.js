/* eslint-disable react/prop-types */
const CreateNewProject = ({ router, type, t }) => (
  <div className="CreateNewProject">
    <button type="button" onClick={() => router.push(`/${type}/projects/create`)}>{t('CreateNewProject')}</button>
    <style jsx>
      {`
				.CreateNewProject {
					display: inline-block;
					float: right;
				}

				@media screen and (max-width: 500px) {
					.CreateNewProject > button {
						font-size: .8rem !important;
						padding: 0 1rem !important;
					}
				}

				.CreateNewProject > button {
					height: 33px;
					line-height: 20px;
					border: 1px solid #97c41a;
					border-radius: 1rem;
					padding: 0 2rem;
					cursor: pointer;
					background: #f6ffed;
					font-weight: bold;
					color: #97c41a;
					font-size: 1rem;
				}

				.CreateNewProject > button:hover {
					opacity: 0.5;
				}
			`}
    </style>
  </div>
)

export default CreateNewProject
