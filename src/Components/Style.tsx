import React from 'react'
type StyleProps={
    styles: React.CSSProperties
}
const Style = (props:StyleProps) => {
  return (
    <div>
      <h1 style={props.styles}>Hello</h1>
    </div>
  )
}

export default Style
