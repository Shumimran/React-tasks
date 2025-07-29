const list = ()=>{
    const items = [Apple, Bnanana, strawberry, Grapes];
    return(
        <div>
            <h1>MY List</h1>
            <ul>
                {items.Map((item,index)=>{
                    <li key={index}>
                        {item} </li>
                })}
                
            </ul>
        </div>
    )
}
export default list;