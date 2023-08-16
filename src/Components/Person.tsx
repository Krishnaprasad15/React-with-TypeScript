//passing objects as a prop
type PersonProps={
    name:{
        first:string
        last:string
    }
}
export const Person = (props:PersonProps) => {
  return (
    <div>
        <h1>{props.name.first} {props.name.last}</h1>
    </div>
  )
}

//  default Person
