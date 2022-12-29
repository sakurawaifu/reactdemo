const map = new WeakMap()

const setTimeoutAsync = (ms: number) => {
  let tid = null
  const p = new Promise<undefined>(resolve => {
    tid = setTimeout(() => {
      resolve(undefined)
    }, ms)
  })
  map.set(p, tid)
  return p
}

const clearTimeoutAsync = (timer: ReturnType<typeof setTimeoutAsync>) => {
  const tid = map.get(timer)
  clearTimeout(tid)
}

export {
  clearTimeoutAsync
}

export default setTimeoutAsync
