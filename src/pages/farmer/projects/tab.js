import { Tabs, Select } from 'antd'

const { TabPane } = Tabs
const { Option } = Select

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Tabs tabPosition={1}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode)
