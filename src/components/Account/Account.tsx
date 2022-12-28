import styles from './Account.module.scss'
import clsmix from '../../utils/clsmix'
import BasePropsType from '../../constant/type/BasePropsType'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';

export type Account = BasePropsType & {}

const Account = (props: Account) => {
  const name = 'Hikari' // todo 用户名

  return (
    <div
      className={clsmix(styles.account, props.className)}
    >
      <Avatar icon={<UserOutlined/>}></Avatar>
      <span className={styles.name}>{name}</span>
    </div>
  )
}

export default Account
