/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Row, Col } from 'antd'
import { useState, useEffect, memo } from 'react'
import fetch from 'isomorphic-unfetch'
import {
  ProjectOutlined,
  DatabaseOutlined,
  CheckSquareOutlined,
  ReloadOutlined,
  CloseSquareOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons'

import { BASE_API_URL } from '../../../../config'
import Widget, { Loading } from '../../Common/Widget'
import Chart from '../../Common/Chart/Chart'
import Bar from '../../Common/Chart/Bar'
import Line from '../../Common/Chart/Line'

const FarmerWidgets = ({ token }) => {
  const [isLoading, setLoading] = useState(true)
  const [project, setProject] = useState([])

  useEffect(() => {
    async function fetchData() {
      const url = `${BASE_API_URL}/api/v1/farmer/dashboard`
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        })
        const { data } = await res.json()
        setProject(data)
        setLoading(false)
      } catch (e) {
        setProject([])
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <Row gutter={[16, 16]}>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        {isLoading
          ? <Loading />
          : project && <Chart project={project} />}
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        {isLoading
          ? <Loading />
          : project && <Bar project={project} />}
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        {isLoading
          ? <Loading />
          : project && <Line project={project} />}
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <Widget isLoading={isLoading} title="Total Projects" count={project.totalProject}>
          <ProjectOutlined style={{ fontSize: 32 }} />
        </Widget>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <Widget isLoading={isLoading} title="Pending Projects" count={project.totalPendingProjects}>
          <ReloadOutlined style={{ fontSize: 32 }} />
        </Widget>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <Widget isLoading={isLoading} title="Working Projects" count={project.totalWorkingProjects}>
          <DatabaseOutlined style={{ fontSize: 32 }} />
        </Widget>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <Widget isLoading={isLoading} title="Finished Projects" count={project.totalFinishedProjects}>
          <CheckSquareOutlined style={{ fontSize: 32 }} />
        </Widget>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <Widget isLoading={isLoading} title="Reject Projects" count={project.totalRejectProjects}>
          <CloseSquareOutlined style={{ fontSize: 32 }} />
        </Widget>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <Widget isLoading={isLoading} title="Expired Projects" count={project.totalExpiredProjects}>
          <FieldTimeOutlined style={{ fontSize: 32 }} />
        </Widget>
      </Col>
    </Row>
  )
}

export default memo(FarmerWidgets)
