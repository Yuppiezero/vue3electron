// Electric Pulse 电脉冲 ep
import {post} from "@/api/config";

/**
 * 保存频带与截止频率 POST
 */
export function saveCutoffFrequency() {
  return post('/ep/cutoff_frequency')
}

/**
 * 保存基本误差 POST
 */
export function saveBasicError() {
  return post('/ep/basic_error')
}

/**
 * 保存脉冲分辨时间 POST
 */
export function saveResolutionTime() {
  return post('/ep/resolution_time')
}

/**
 * 保存灵敏度 POST
 */
export function saveSensitivity() {
  return post('/ep/sensitivity')
}

/**
 * 保存脉冲重复率 POST
 */
export function saveRepetition() {
  return post('/ep/repetition')
}

/**
 * 保存稳定性 POST
 */
export function saveStability() {
  return post('/ep/stability')
}

/**
 * 校准电脉冲发生器 POST
 */
export function saveCalibrateGenerator() {
  return post('/ep/calibrate_generator')
}
