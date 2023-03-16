import React from 'react'

export default function Alert(props) {
  return (
   
        props.alert && <div className="alert alert-success" role="alert" style={{marginTop:"70px"}}>
            {props.alert.type}:{props.alert.msg}
        </div>
    
  )
}
