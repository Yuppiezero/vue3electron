import {get, post} from "@/api/config";

/**
 * 获取信号发生器
 * @param device
 * @param channel
 * @returns {*}
 */
export function getWave(device, channel = 'C1') {
  return get('/device/waveform_generator/basic_wave', {device, channel})
}

export function setBasicWave(data) {
  return post('/device/waveform_generator/basic_wave', data)
}

/**
 * 示波器 GET
 * return {
 *   time_domain_signal: { time, voltage },
 *   freq_domain_signal: { freq, amp },
 * }
 */
export function Oscilloscope({ device, channel }) {
  return get('/device/oscilloscope', { device, channel })
}

export function getBurstWave({ device, channel }) {
  return get('/device/waveform_generator/burst_wave', { device, channel })
}

export function setBurstWave({ device, is_output, channel, period }) {
  return post('/device/waveform_generator/burst_wave', { device, is_output, channel, period })
}
