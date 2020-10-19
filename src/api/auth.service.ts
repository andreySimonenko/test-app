import axios from 'axios'
import qs from 'qs'

const AUTH_URL = 'https://test-contractorfinder.bradfordwhite.com/'

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'FROM-ANGULAR': 'true'
}

const login = async (email: string, password: string): Promise<any> =>
  axios.post(AUTH_URL + 'j_spring_security_check', qs.stringify({
    j_username: email,
    j_password: password
  }), { 
    headers
  })

const logout = async (): Promise<any> =>
  axios.get(AUTH_URL + 'j_spring_security_logout')

export const AuthService = {
  login,
  logout
}
  