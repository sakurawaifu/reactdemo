import styles from './ArticleList.module.scss'
import BasePropsType from '../../constant/type/BasePropsType'
import clsmix from '../../utils/clsmix'

export type ArticleListProps = BasePropsType & {}

const ArticleList = (props: ArticleListProps) => {

  return (
    <div className={clsmix(styles.articleList, props.className)}>
      article list
    </div>
  )
}
export default ArticleList
