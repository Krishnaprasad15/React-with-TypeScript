import React from 'react'
type InputProps={
    value:string 
    ChangeHandler: (event:React.ChangeEvent<HTMLInputElement>)=>void
}
const Input = (props:InputProps) => {
  return (
    <div>
      <input type='text' value={props.value} onChange={props.ChangeHandler}></input>
    </div>
  )
}

export default Input
