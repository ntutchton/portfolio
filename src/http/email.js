import axios from 'axios'

export default function sendEmail(name, email, message) {
  return axios({
    method:'post',
    url:'https://1nsznmyy0l.execute-api.us-east-1.amazonaws.com/dev',
    data: JSON.stringify({
      name: name,
      email: email,
      message: message
    }),
    headers: {'Content-Type': 'application/json'}
  })
}
