import { Select } from 'antd'

const { Option } = Select

function handleChange(value) {
  console.log(`selected ${value}`)
}

const ChangeLanguage = () => (
  <Select
    defaultValue="mm"
    style={{ width: 65 }}
    size="small"
    onChange={handleChange}
  >
    <Option value="en">EN</Option>
    <Option value="mm">MM</Option>
  </Select>
)

export default ChangeLanguage
