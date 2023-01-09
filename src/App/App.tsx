import '@/styles/global.scss'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import zhCN from 'antd/locale/zh_CN'
import router from '@/route/router'
import { RouterProvider } from 'react-router-dom'

dayjs.locale('zh-cn')

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  )
}

export default App
