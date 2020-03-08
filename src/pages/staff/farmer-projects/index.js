import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Tabs } from 'antd'
import StaffLayout from '../../../layouts/StaffLayout'
import isStaffMiddleware from '../../../../lib/middleware/isStaffMiddleware'
import { withTranslation, i18n } from '../../../i18n'

import ProjectListByStatus from '../../../components/Staff/Project/ProjectListByStatus'

const { TabPane } = Tabs

const Index = ({ authInfo, token, t }) => (
  <StaffLayout i18n={i18n} t={t}>

    <Tabs defaultActiveKey="Pending" tabBarStyle={{ backgroun: '#ffffff' }}>
      <TabPane tab="Pending" key="Pending">
        <div className="Container">
          <ProjectListByStatus userRole="farmer" token={token} authInfo={authInfo} status="Pending" />
        </div>
      </TabPane>
      <TabPane tab="Working" key="Working">
        <div className="Container">
          <ProjectListByStatus userRole="farmer" token={token} authInfo={authInfo} status="Working" />
        </div>
      </TabPane>
      <TabPane tab="Finished" key="Finished">
        <div className="Container">
          <ProjectListByStatus userRole="farmer" token={token} authInfo={authInfo} status="Finished" />
        </div>
      </TabPane>
      <TabPane tab="Reject" key="Reject">
        <div className="Container">
          <ProjectListByStatus userRole="farmer" token={token} authInfo={authInfo} status="Reject" />
        </div>
      </TabPane>
      <TabPane tab="Expired" key="Expired">
        <div className="Container">
          <ProjectListByStatus userRole="farmer" token={token} authInfo={authInfo} status="Expired" />
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
  </StaffLayout>
)

Index.getInitialProps = async (context) => {
  const { authInfo, token } = await isStaffMiddleware(context)

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
