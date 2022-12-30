import styles from './ArticleList.module.scss'
import useMount from '../../hooks/common/useMount'
import { fetchArticleList } from '../../api/article'
import classnames from '../../utils/classnames'
import { CProps } from '../../types/CProps'

export type ArticleListProps = CProps<{}>

const ArticleList = (props: ArticleListProps) => {
  useMount(() => {
    fetchArticleList()
  })

  return (
    <div className={classnames(styles.articleList, props.className)}>
      article list
    </div>
  )
}
export default ArticleList
