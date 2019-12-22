import React,{lazy,Suspense,createContext,useEffect, useRef, useLayoutEffect, useState, useMemo, useReducer} from 'react';
import {useAsync} from '../../utils/hooks'
import {ajax} from '../../utils/ajax'
import List from "./List"
import Immutable from 'immutable';
import {useStore} from './ShoppingReducer'


export const context = createContext({})

function areEqual(prevProps:any, nextProps:any) {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
   debugger
   if(prevProps.a.a!=nextProps.a.a){
     debugger
    return false
   }
   return true
  }
const Shopping:React.FC = (props)=>{
    let [i,setI]=useState(1)

    let [store,dispatch]=useStore()
    

    // let [store,dispatch]=useAsync('/entitlement','get',{
    //     tenantId:1
    // })

    useEffect(()=>{
        console.log(`shopping-didMount`)
        ajax('/entitlement','get',(rs:any)=>{
            dispatch({
                type:'update',
                data:rs
            })
        },{tenantId:1})
    },[])

    useEffect(()=>{
        console.log(`shopping-didUpdate`)
       
    })

    return (
        <>
            <context.Provider value={{store,dispatch}}>
                <List></List>
            </context.Provider>
        </>
    )
}
export default React.memo(Shopping,areEqual)