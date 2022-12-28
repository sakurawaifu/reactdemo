const classname = (cls: string | string[] | Record<string, boolean>) => {
  if (typeof cls === 'string') {
    return cls
  } else if (Array.isArray(cls)) {
    return cls.join(' ')
  } else {
    return Object.keys(cls).filter(key => cls[key]).join(' ')
  }
}

export default classname
