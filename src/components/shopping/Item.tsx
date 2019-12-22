import React from "react"

interface Item{
    appId:string;
    name:string;
    description:string;
    bought:number;
}

interface Props{
    data:Item;
}

const Item=(props:Props)=>{
    return (
        <>
            <div>
                {(props.data as any).get('appId')}
            </div>
        </>
    )
}
export default Item