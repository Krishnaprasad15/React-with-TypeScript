// import React from 'react'
type StatusProps={
    status: 'loading' | 'fetching' | 'error'
}
const Status = (props:StatusProps) => {
    let msg 
    if(props.status==='loading'){
        msg= 'Loading'
    }else if(props.status==='fetching'){
        msg= 'Fetching data'
    }else{
        msg='Error'
    }
  return (
    <div>
      <h2>status - {msg}</h2>
    </div>
  )
}

export default Status
