import React,{userRef,useState} from 'react'

function ProfilePic() {
  return (
    <div style={{ height: '200px', width: '200px' , border: '2px solid red'}}>
        <img src="./assts/user.png" alt=''></img>
        <input type="file"></input>
    </div>
  )
}

export default ProfilePic
