// Ultrasound 超声波 ae

import {post, get} from "@/api/config";

/**
 * 保存检测灵敏度 POST
 * @param data JSON [{background, target, change}]
 * @param exp_id
 * @returns {*}
 */
export function saveDetectionSensitivity({ data, exp_id }) {
  return post('/ae/detection_sensitivity', { data, exp_id })
}

/**
 * 保存检测频带 POST
 * @param peak_frequency
 * @param lower_frequency
 * @param upper_frequency
 * @param test_frequency
 * @param exp_id
 * @returns {*}
 */
export function saveFrequencyBand({peak_frequency,lower_frequency,upper_frequency,test_frequency,exp_id}) {
  return post('/ae/frequency_band', {peak_frequency,lower_frequency,upper_frequency,test_frequency,exp_id})
}

/**
 * 保存动态范围 POST
 * @param exp_id
 * @param u1
 * @param u2
 * @param dynamic_range
 * @param background
 * @returns {*}
 */
export function saveDynamicRange({ exp_id, u1, u2, dynamic_range, background }) {
  return post('/ae/dynamic_range', { exp_id, u1, u2, dynamic_range, background })
}

/**
 * 保存线性误差度 POST
 * @param exp_id
 * @param frequency
 * @param values Object { additionalProp1: { amp, display, linearity_error } }
 * @returns {*}
 */
export function saveLinearityError({ exp_id, frequency, values }) {
  return post('/ae/linearity_error', { exp_id, frequency, values })
}

/**
 * 保存通道一致性 POST
 * @param amp_deviation
 * @param time_deviation
 * @param channels Object { additionalProp1: { amp, time } }
 * @param exp_id
 * @returns {*}
 */
export function saveChannelConsistency({ amp_deviation, time_deviation, channels, exp_id}) {
  return post('/ae/channel_consistency', { amp_deviation, time_deviation, channels, exp_id})
}

/**
 * 保存重复性 POST
 * @param repeatability_deviation
 * @param data
 * @param exp_id
 * @returns {*}
 */
export function saveRepeatability({ repeatability_deviation, data, exp_id }) {
  return post('/ae/repeatability', { repeatability_deviation, data, exp_id })
}

/**
 * 保存频率误差 POST
 * @param data Array [{ source, target, error }]
 * @param exp_id
 * @returns {*}
 */
export function saveFrequencyError({ data, exp_id }) {
  return post('/ae/frequency_error', { data, exp_id })
}

/**
 * 获取传感器灵敏度 Get
 * @param lower_freq
 * @param upper_freq
 * @param resolution
 * @param unit string v_per_microbar, v_per_(m_per_s)
 * @param device_addr
 * @param standard_channel
 * @param tested_channel
 * @returns {*}
 */
export function getSensorSensitivity({
  lower_freq, upper_freq,resolution, unit, device_addr, standard_channel, tested_channel
}) {
  return get('/ae/sensor_sensitivity', {
    lower_freq, upper_freq,resolution, unit, device_addr, standard_channel, tested_channel
  })
}

/**
 * 保存传感器灵敏度 POST
 * @param sensi
 * @param frequency
 * @param peak_amp
 * @param peak_freq
 * @param avg_amp
 * @param exp_id
 * @returns {*}
 */
export function saveSensorSensitivity({ sensi, frequency, peak_amp, peak_freq, avg_amp, exp_id }) {
  return post('/ae/sensor_sensitivity', { sensi, frequency, peak_amp, peak_freq, avg_amp, exp_id })
}

/**
 * 保存灵敏度 POST
 * @param exp_id
 * @param background
 * @param test
 * @param standard
 * @param sensi
 * @returns {*}
 */
export function saveSensitivity({ exp_id, background, test, standard, sensi }) {
  return post('/ae/sensitivity', { exp_id, background, test, standard, sensi })
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
  return post('/ae/stability', { start_time, start_value, end_time, end_value, stability, exp_id })
}

/**
 * 保存幅值线性误差 POST
 */
export function saveAmpLinearityError({ exp_id }) {
  return post('/ae/amp_linearity_error', { exp_id })
}
