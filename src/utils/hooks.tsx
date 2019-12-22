import React, { useState, useEffect,useCallback,useReducer } from 'react';

export function useAsync(url:string,method:string,param?:any,credentials?:any){

    let [store,dispatch]=useReducer((state:any,action:any)=>{
        switch(action.type){
            case 'update':
                state=action.data
        }
        return state
    },[
        {appId:'a'},
        {appId:'b'},
        {appId:'c'},
    ])

    let headers = new Headers();
    headers.append("csrfid", "vi");

    let propertires=[]
    if(method=='get'&&param!=null){
        for(let key in param){
            propertires.push(`${key}=${ param[key]}`)
        }
        url+=`?`+propertires.join('&')
    }

    let tf=()=>{
        let f=new Promise((resolve,reject)=>{
            console.log('fetch')
            fetch('http://localhost:3000'+url,{
                headers: headers,
                credentials: "include",
                method: 'GET',
                body: method == "get" ? undefined : param
            }).then((d)=>{
                return d.json()
            }).then(dd=>{
                console.log('resolved')
                resolve(dd)
            })
        })
        let timeout=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('Gateway timeout error.')
            },30*60*1000)
        })
        return Promise.race([f,timeout])
    }

    let ctfr=useCallback(async()=>{
        let rs:any= await tf()
        dispatch({
            type:'update',
            data:rs
        })
    },[url,param])
    

    useEffect(()=>{
        ctfr()
        console.log(`shopping-didMount`)
    },[])


    return [store,dispatch]
}