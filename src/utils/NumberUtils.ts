const inRange = (min: number, max: number, n: number) => n >= min && n <= max

const clamp = (min: number, max: number, n: number) =>
  n < min
    ? min
    : (n > max
      ? max
      : n)

const NumberUtils = {
  inRange,
  clamp
}

export default NumberUtils
