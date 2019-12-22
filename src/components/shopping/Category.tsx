import React,{useState} from "react"; 
import Item from "./Item" 

interface DataItem{
    id:string;
    name:string;
    description:string;
    bought:number;
}

interface Props{
    data:DataItem;
}
const Category= (props:Props)=>{
    const [list,setList]=useState([])

    return (
        <>
            
        </>
    )
}
export default Category