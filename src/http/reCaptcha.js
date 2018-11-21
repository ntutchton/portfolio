import axios from 'axios'

export default function verifyReCaptcha(reCaptchaString) {
  return axios({
    method:'post',
    url:'https://tbz70m8ag6.execute-api.us-east-1.amazonaws.com/dev',
    data: JSON.stringify({ reCaptchaString: reCaptchaString }),
    headers: {'Content-Type': 'application/json'}
  })
}
