const classnames = (...args: Array<string | { [P: string]: boolean } | null | undefined>) => {
  const result: string[] = []
  args.forEach(v => {
    if (v === null || v === undefined) return

    if (typeof v === 'string') {
      result.push(v)
    } else {
      result.push(...Object.keys(v).filter(key => v[key]))
    }
  })
  return [...new Set(result)].join(' ')
}

export default classnames
