import React,{lazy,Suspense,createContext,useEffect, useRef, useLayoutEffect, useState, useMemo, useReducer} from 'react';
import Immutable from 'immutable';

export function useStore(){
    let [store,dispatch]=useReducer((state:any,action:any)=>{
        switch(action.type){
            case 'update':
                return state.set('list',Immutable.fromJS(action.data))
        }
        return state
    },
    Immutable.fromJS({
        title:`I'm a title`,
        list:[
            {appId:'a'},
            {appId:'b'},
            {appId:'c'},
        ]
    }))
    return [store,dispatch]
}