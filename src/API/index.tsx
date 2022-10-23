const BASE_URL = 'http://34.172.10.128/api/v1/account'

export const API = {
  register: (account: any) => {
    return fetch(`${BASE_URL}/register/`, {
      method:'POST',
      body: JSON.stringify({
        email: account.email ,
        password: account.password ,
        password2: account.password ,
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
  },
  register_mentor: (account: any) => {
    return fetch(`${BASE_URL}/register/mentor/`, {
      method:'POST',
      body: JSON.stringify({
        email: account.email ,
        password: account.password ,
        password2: account.password ,
        first_name: account.first_name,
        last_name: account.last_name,
        type: '',
        experience: '',
        auidence: ''
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
  },
  login: (account: any) => {
    return fetch(`${BASE_URL}/login/`, {
      method:'POST',
      body: JSON.stringify({
        email: account.email ,
        password: account.password ,
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
  },
  forgot_password: (account: any) => {
    return fetch(`${BASE_URL}/forgot_password/`, {
      method:'POST',
      body: JSON.stringify({
        email: account.email ,
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
  },
}