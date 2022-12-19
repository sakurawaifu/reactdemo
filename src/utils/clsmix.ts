type clsType = string | string[]

const splitClassName = (cls: clsType): string[] => typeof cls === 'string' ? cls.split(' ') : cls

export default function clsmix(selfCls: clsType, otherCls?: clsType): string {
  if (otherCls === undefined) {
    return typeof selfCls === 'string' ? selfCls : selfCls.join(' ')
  }

  const clsAry1: string[] = splitClassName(selfCls)
  const clsAry2: string[] = splitClassName(otherCls)
  return [...new Set([...clsAry1, ...clsAry2])].join(' ')
}
