import React from 'react'

function Profile({fullName,bio,Profession,children,handleName}) {
  return (
    <div style={{color: 'yellow',backgroundColor:'blue', textAlign:'center'}} >

      <h1>{fullName}</h1>
         <h2 style={{color:'green'}}> {bio}  </h2>
            <h3> {Profession} </h3>
              <img src={children} /> 
                <button onClick={()=>alert(`the ${handleName} of the profile user`)}>  </button>
    </div>

  )
}

export default Profile
