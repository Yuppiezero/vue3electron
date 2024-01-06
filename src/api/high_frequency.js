// High Frequency 高频 hf

import {post} from "@/api/config";

/**
 * 保存传输阻抗 POST
 */
export function saveTransferImpedance() {
  return post('/hf/transfer-impedance')
}

/**
 * 保存检测频带 POST
 */
export function saveFrequencyBand() {
  return post('/hf/frequency_band')
}

/**
 * 保存检测灵敏度 POST
 */
export function saveDetectionSensitivity() {
  return post('/hf/detection_sensitivity')
}

/**
 * 保存线性度 POST
 */
export function saveLinearity() {
  return post('/hf/linearity')
}

/**
 * 保存抗干扰性能 POST
 */
export function saveAntiInterference() {
  return post('/hf/anti_interference')
}
