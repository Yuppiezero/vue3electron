import Big from "big.js";

export function khz(v) {
  if (v && !v.endsWith('HZ')) return v
  let value = Number(v && v.replace('HZ', ''))
  if (value >= 1000) {
    return Math.floor(value / 1000)
  }
  return Number(value)
}

/**
 * dB 转 mV
 * @param dB
 * @returns {number}
 */
export function mV(dB) {
  return Math.pow(10, dB/20)
}

export function calcDeviation(u, m, p) {
  const f = BigJS(m).times(p).toString()
  // return (u - m*p)/(m*p)
  return BigJS(u).minus(f).div(f).toNumber()
}

export function BigJS(v) {
  return Big(v || 0)
}
