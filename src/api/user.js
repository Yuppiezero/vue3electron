import {del, get, post, put} from '@/api/config'

export function login(data) {
  return post('/auth/users/tokens', data, 'application/x-www-form-urlencoded')
}

export function register(data) {
  return post('/auth/users', data)
}

export function userInfo() {
  return get('/auth/users/me')
}

export function refreshToken({ refreshToken }) {
  return put('/auth/users/tokens', { refreshToken })
}

export function logout({refreshToken}) {
  return del('/auth/users/tokens',{refreshToken})
}
