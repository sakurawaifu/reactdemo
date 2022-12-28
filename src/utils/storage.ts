const storage = {
  set(k: string, v: any) {
    localStorage.setItem(k, JSON.stringify(v))
  },
  get(k: string) {
    const v = localStorage.getItem(k)
    return v !== null ? JSON.parse(v) : null
  }
}

export default storage
