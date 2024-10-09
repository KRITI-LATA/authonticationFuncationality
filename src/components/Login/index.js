// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

import './index.css'

const Login = props => {
  const onSummitSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSummitSuccess(data.jwt_token)
    }
    return <Redirect to="/" />
  }
  return (
    <>
      <div className="login-container">
        <h1>Please Login</h1>
        <button type="button" onClick={onClickLogin}>
          Login with Sample Creds
        </button>
      </div>
    </>
  )
}
export default withRouter(Login)
