import styles from './ArticleList.module.scss'
import classnames from '../../utils/classnames'
import { CProps } from '@/types/CProps'
import { useLoaderData } from 'react-router-dom'

export type ArticleListProps = CProps<{}>

const ArticleList = (props: ArticleListProps) => {
  console.log('article list')
  const list = useLoaderData()
  console.log(list)

  return (
    <div className={classnames(styles.articleList, props.className)}>
      article list
    </div>
  )
}
export default ArticleList
