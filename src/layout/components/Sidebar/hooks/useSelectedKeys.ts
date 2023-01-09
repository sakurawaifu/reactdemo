import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MenuProps } from 'antd'

const useSelectedKeys = () => {
  const navigate = useNavigate()

  const { pathname } = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname])
  const handleClickMenuItem: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
    setSelectedKeys([key])
  }

  return [selectedKeys, handleClickMenuItem] as const
}
export default useSelectedKeys
