type greetProps={
    name:string
}
export const Greet=(props:greetProps)=>{
    return (
        <div>
            <h1>Hey there, I'm {props.name} currently learning TypeScript!</h1>
        </div>
    )
}