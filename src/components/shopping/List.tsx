import React, { useContext } from "react";
import {context} from './Shopping'
import Item from "./Item"

interface ItemData{
    appId?:string;
    name?:string;
    description?:string;
    bought?:number;
}

interface Props{
    data?:Array<ItemData>;
}

const List:React.FC <Props> = (props:Props):React.ReactElement=>{
    //上面这句可以简写成 ： const List = (props:Props)=>{
    // const [list,setList]=useState([])
    
    let {store,dispatch}=useContext(context) as any

    const click=(e:any)=>{
        console.log('clicked')
        dispatch({
            type:'update',
            data:{
                list:[
                    {
                        appId:'a'
                    },
                    {
                        appId:'b'
                    },
                ]
            }
        })
    }
    return (
        <>
            
            <div>
                {
                    (store.get('list')!=null && store.get('list').size>0)?store.get('list').map((item:any)=>{
                        return (
                            <Item data={item as any}></Item>
                        )
                    }):null
                }
            </div>
            <span onClick={(e)=>{click(e)}}>CLick me</span>
        </>
    )
}
export default List