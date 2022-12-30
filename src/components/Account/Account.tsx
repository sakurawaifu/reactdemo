import styles from './Account.module.scss'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import classnames from '../../utils/classnames'
import { CProps } from '../../types/CProps'

export type AccountProps = CProps<{}>

const Account = (props: AccountProps) => {
  const name = 'Hikari' // todo 用户名

  return (
    <div
      className={classnames(styles.account, props.className)}
    >
      <Avatar icon={<UserOutlined/>}></Avatar>
      <span className={styles.name}>{name}</span>
    </div>
  )
}

export default Account
