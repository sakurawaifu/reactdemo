import NumberUtils from '@/utils/NumberUtils'

const VALID_RANGE: [number, number] = [0, 0x10FFFF]

const codePointIsValid = (codePoint: number) => NumberUtils.inRange(...VALID_RANGE, codePoint)

const format = (codePoint: number) => codePoint.toString(16).toUpperCase().padStart(4, '0')

const clamp = (codePoint: number) => NumberUtils.clamp(...VALID_RANGE, codePoint)

const UnicodeUtils = {
  codePointIsValid,
  format,
  clamp
}

export default UnicodeUtils
