// Transient Earth Voltage 瞬态接地电压

import {post} from "@/api/config";

/**
 * 保存检测频带 POST
 * @param data Array [{ frequency, value }]
 * @param peak_frequency
 * @param lower_frequency
 * @param upper_frequency
 * @param detection_frequency
 * @param exp_id int 实验ID
 * @returns {*}
 */
export function saveFrequencyBand({
    data, peak_frequency, lower_frequency, upper_frequency, detection_frequency, exp_id
}) {
  return post('/tev/frequency_band', {
    data, peak_frequency, lower_frequency, upper_frequency, detection_frequency, exp_id
  })
}

/**
 * 保存频带和上下限截止频率 POST
 */
export function saveCutoffFrequency() {
  return post('/tev/cutoff_frequency')
}

/**
 * 保存幅值线性误差 POST
 */
export function saveAmpLinearityError() {
  return post('/tev/amp_linearity_error')
}

/**
 * 保存线性误差度 POST
 * @param exp_id
 * @param frequency
 * @param values JSON {additionalProp: {amp, display, linearity_error} }
 * @returns {*}
 */
export function saveLinearityError({ exp_id, frequency, values }) {
  return post('/tev/linearity_error', { exp_id, frequency, values })
}

/**
 * 保存脉冲计数 POST
 */
export function savePulseCount() {
  return post('/tev/pulse_count')
}

/**
 * 保存稳定性 POST
 * @param start_time
 * @param start_value
 * @param end_time
 * @param end_value
 * @param stability
 * @param exp_id
 * @returns {*}
 */
export function saveStability({ start_time, start_value, end_time, end_value, stability, exp_id }) {
  return post('/tev/stability', { start_time, start_value, end_time, end_value, stability, exp_id })
}

/**
 * 保存电电定位 POST
 */
export function saveElectrolocation() {
  return post('/tev/electrolocation')
}

/**
 * 频带和上下限截止频率 POST
 */
export function savespectralCutOff() {
  return post('/tev/cutoff_frequency')
}
/**
 * 保存幅值线性误差 POST
 */
export function savelinearDifference(){
  return post('/tev/amp_linearity_error')
}
// 灵敏度 POST
export function saveSensitivity(){
  return post('/tev/sensitivity')
}
// 连续工作稳定性
export function savetedStability(){
  return post('')
}
// 分辨率
export function saveresolutionRate(){
  return post('/tev/resolution')
}