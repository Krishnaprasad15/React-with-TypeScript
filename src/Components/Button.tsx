import React from 'react'
type EventPorps={
    Handler: (event:React.MouseEvent<HTMLButtonElement>,id:number) => void
}
const Button = (props:EventPorps) => {
  return (
    <div>
      <button onClick={(event)=>props.Handler(event,1)}> Click</button>
    </div>
  )
}

export default Button
