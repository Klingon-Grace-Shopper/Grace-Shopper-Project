import React, {useState} from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'
import {authenticate, error} from '../store'

/**
 * COMPONENT
 */
const AuthForm = ({formName}) => {

  const {userName, setUserName} = useState('')
  const {password, setPassword} = useState('')

  const error = useSelector(state => state.auth.error)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authenticate(userName, password, formName))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input onChange={(e) => setUserName(e.target.value)} name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" />
        </div>
        <div>
          <button type="submit">{formName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.auth.error
//   }
// }

// const mapSignup = state => {
//   return {
//     name: 'signup',
//     displayName: 'Sign Up',
//     error: state.auth.error
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault()
//       const formName = evt.target.name
//       const username = evt.target.username.value
//       const password = evt.target.password.value
//       dispatch(authenticate(username, password, formName))
//     }
//   }
// }

export default AuthForm
