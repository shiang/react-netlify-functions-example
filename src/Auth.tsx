import React from 'react'
import {
  useIdentityContext,
  IdentityModal
} from 'react-netlify-identity-widget'

interface MyProps {
  children: React.ReactNode
}

const Auth: React.FC<MyProps> = ({ children }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState<boolean>(false)
  const isLoggedIn = identity && identity.isLoggedIn

  const toggleLogInState = () => {
    setDialog(true)
  }

  return (
    <div>
      <button type='button' onClick={toggleLogInState}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
      {!isLoggedIn && <h1>Log in to see the counter!!</h1>}
      {isLoggedIn && <div>{children}</div>}
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </div>
  )
}

export default Auth
