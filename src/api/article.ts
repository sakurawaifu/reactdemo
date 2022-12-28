import request from './request'

export const fetchArticleList = () => {
  return request({
    method: 'POST',
    url: '/headset/article/list',
    data: {
      pageNo: 1,
      pageSize: 10
    }
  })
}
