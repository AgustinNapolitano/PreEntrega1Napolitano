

export default function Title({title, list}){
    return(
        <div>
            <h1>{title}</h1>
            {list.map((value,index)=>{
                const uniqueKey = value+index
                return(
                    <p id={uniqueKey} key={uniqueKey}>{value}</p>
                )          
            })}
        </div>
        
    )      
}

