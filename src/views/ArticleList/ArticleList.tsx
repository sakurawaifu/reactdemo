import styles from './ArticleList.module.scss'
import BasePropsType from '../../constant/type/BasePropsType'
import clsmix from '../../utils/clsmix'
import useMount from '../../hooks/common/useMount'
import { fetchArticleList } from '../../api/article'

export type ArticleListProps = BasePropsType & {}

const ArticleList = (props: ArticleListProps) => {
  useMount(() => {
    fetchArticleList()
  })

  return (
    <div className={clsmix(styles.articleList, props.className)}>
      article list
    </div>
  )
}
export default ArticleList
