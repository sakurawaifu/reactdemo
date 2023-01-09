import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MenuProps } from 'antd'

const useSelectedKeys = () => {
  const navigate = useNavigate()

  const { pathname } = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname])
  useEffect(() => {
    setSelectedKeys([pathname])
  }, [pathname])

  const handleClickMenuItem: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  return [selectedKeys, handleClickMenuItem] as const
}
export default useSelectedKeys
