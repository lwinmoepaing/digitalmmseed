/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tabs } from 'antd'
import FarmerLayout from '../../../layouts/FarmerLayout'
import isPassAuth from '../../../../lib/middleware/isPassAuth'
import { withTranslation, i18n } from '../../../i18n'
import AllProjectsForFarmer from '../../../components/Farmer/Project/AllProjects'
import ProjectListByStatus from '../../../components/Farmer/Project/ProjectListByStatus'

const { TabPane } = Tabs


const Index = ({ authInfo, token, t }) => (
  <FarmerLayout i18n={i18n}>

    <Tabs defaultActiveKey={1} tabBarStyle={{ backgroun: '#ffffff' }}>
      <TabPane tab="Over All" key="1">
        <div className="Container">
          <AllProjectsForFarmer token={token} authInfo={authInfo} />
        </div>
      </TabPane>
      <TabPane tab="Pending" key="Pending">
        <div className="Container">
          <ProjectListByStatus token={token} authInfo={authInfo} status="Pending" />
        </div>
      </TabPane>
      <TabPane tab="Working" key="Working">
        <div className="Container">
          <ProjectListByStatus token={token} authInfo={authInfo} status="Working" />
        </div>
      </TabPane>
      <TabPane tab="Finished" key="Finished">
        <div className="Container">
          <ProjectListByStatus token={token} authInfo={authInfo} status="Finished" />
        </div>
      </TabPane>
      <TabPane tab="Reject" key="Reject">
        <div className="Container">
          <ProjectListByStatus token={token} authInfo={authInfo} status="Reject" />
        </div>
      </TabPane>
      <TabPane tab="Expired" key="Expired">
        <div className="Container">
          <ProjectListByStatus token={token} authInfo={authInfo} status="Expired" />
        </div>
      </TabPane>
    </Tabs>

    <style jsx>
      {`
				.Container {
					background: #fff;
					border-radius: 1rem;
					padding: 1rem;
				}
			`}
    </style>
  </FarmerLayout>
)

Index.getInitialProps = async (context) => {
  const { authInfo, token } = await isPassAuth(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default connect((state) => state)(withTranslation('common')(Index))
