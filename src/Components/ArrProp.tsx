type ArrProps={
    names:{
        first:string
        last:string
    }[]
}
const ArrProp = (props:ArrProps) => {
  return (
    <div>
      {
        props.names.map(name=>(
            <h1 key={name.first}>{name.first} {name.last}</h1>
        ))
      }
    </div>
  )
}

export default ArrProp
