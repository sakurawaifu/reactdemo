import NumberUtils from '@/utils/NumberUtils'

const VALID_RANGE: [number, number] = [0, 0x10FFFF]

const codePointIsValid = (codePoint: number) => NumberUtils.inRange(...VALID_RANGE, codePoint)

const pad = (codePointHexStr: string) =>
  codePointHexStr.length <= 4
    ? codePointHexStr.padStart(4, '0')
    : codePointHexStr

const format = (codePoint: number) => pad(codePoint.toString(16).toUpperCase())

const clamp = (codePoint: number) => NumberUtils.clamp(...VALID_RANGE, codePoint)

const UnicodeUtils = {
  codePointIsValid,
  pad,
  format,
  clamp
}

export default UnicodeUtils
