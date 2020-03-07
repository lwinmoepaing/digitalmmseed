/* eslint-disable react/prop-types */
import { Select } from 'antd'

const { Option } = Select

const SelectLanguage = ({ setLang, i18n }) => {
  const handleChange = (value) => {
    setLang(value)
  }

  const styles = {
    width: 70, position: 'absolute', right: 3, top: 4,
  }

  return	(
    <Select
      defaultValue={i18n.language || 'mm'}
      style={styles}
      onChange={handleChange}
    >
      <Option value="en">EN</Option>
      <Option value="mm">MM</Option>
    </Select>
  )
}

export default SelectLanguage
