import React from 'react';

type propItems<T> = {
    items:T[]
    onClick:(value:T)=>void
    
}




const List = <T extends {}>({items,onClick}:propItems<T>) => {
  return (
    <div>
        <h1>List of Items</h1>
        {
            items.map((item,index)=>{
                return(
                    <div key={index} onClick={()=>onClick(item)}>
                      {/* {item} */}
                    </div>
                )
            })
        }
    </div>
  )
}

export default List