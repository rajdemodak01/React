import React,{useContext} from 'react'
import UserContext from '../Context/userContext'

function Profile() {
    const {user}=useContext(UserContext)

  if (!user) {
    return(
        <div>Please Log in</div>
    )
  }
  return(
    <div>
        Welcome {user.userName} and your password is {user.password}
    </div>
  )
}

export default Profile