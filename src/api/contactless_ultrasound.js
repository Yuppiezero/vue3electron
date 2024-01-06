// Contactless Ultrasound 超声波 ncu

import {post} from "@/api/config";

/**
 * 保存检测灵敏度 POST
 * @param input_frequency
 * @param input_amp
 * @param display_background
 * @param display_detection
 * @returns {*}
 */
export function saveDetectionSensitivity({ input_frequency, input_amp, display_background, display_detection }) {
  return post('/ncu/detection_sensitivity', {
    input_frequency, input_amp, display_background, display_detection
  })
}

/**
 * 保存检测频带 POST
 * @param data Array [{ peak_frequency, lower_frequency, upper_frequency, test_frequency }]
 * @returns {*}
 */
export function saveFrequencyBand(data) {
  return post('/ncu/frequency_band', data)
}

/**
 * 保存动态范围 POST
 * @param data Array [{ u1, u2, dynamic_range }]
 */
export function saveDynamicRange(data) {
  return post('/ncu/dynamic_range', data)
}

/**
 * 保存线性误差度 POST
 * @param data Array [{ frequency, amp, display, linearity_error}]
 */
export function saveLinearityError(data) {
  return post('/ncu/linearity_error', data)
}

/**
 * 保存通道一致性 POST
 */
export function saveChannelConsistency() {
  return post('/ncu/channel_consistency')
}

/**
 * 保存重复性 POST
 */
export function saveRepeatability() {
  return post('/ncu/repeatability')
}
