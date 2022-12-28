type clsType = string

const splitCls = (cls: clsType) => cls.trim().split(' ')

const clsmix = (self?: clsType, other?: clsType): string => {
  if (self === undefined && other === undefined) {
    return ''
  }

  if (self !== undefined && other !== undefined) {
    const selfClsAry = splitCls(self)
    const otherClsAry = splitCls(other)
    return [...new Set([...selfClsAry, ...otherClsAry])].join(' ')
  }

  if (self !== undefined) {
    const selfClsAry = splitCls(self)
    return [...new Set([...selfClsAry])].join(' ')
  } else {
    const otherClsAry = splitCls(other as clsType)
    return [...new Set([...otherClsAry])].join(' ')
  }
}

export default clsmix
