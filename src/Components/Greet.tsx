type greetProps={
    name:string,
    msgCount:number,
    isLoggedIn:boolean
}
export const Greet=(props:greetProps)=>{
    return (
        <div>
            {
                props.isLoggedIn? <h1>Hello {props.name} you have {props.msgCount} unread Messages</h1>:<h1>Hello User</h1>
            }
        </div>
    )
}