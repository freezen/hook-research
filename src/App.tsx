import React,{lazy,Suspense,useEffect, useRef, useLayoutEffect, useState, useMemo} from 'react';
import logo from './logo.svg';
import Shopping from './components/shopping/Shopping'
import './App.css';

const App: React.FC = () => {
  let title=useRef(null)
  useEffect(()=>{
    console.log("App-didMount");
  },[])
  useEffect(()=>{
    console.log("App-didUpdate");
  })

  useLayoutEffect(()=>{
    // let animation=requestAnimationFrame(function fn(){
      
    //   if(i<100){
    //     (title.current as any).setNativeProps({
    //       style:{
    //         width:i
    //       }
    //     })
    //     i++
    //     requestAnimationFrame( fn)
    //   }else{
    //     cancelAnimationFrame(animation)
    //   }
    // })
    console.log("App-didRendered");
  })

  return (
    <div className="App">
      <header className="">
        <p>
          zhongzixiangmu: 
        </p>
        <p>
          swagger前后端分离 +  useAsync + 自定义 hook + useContext + useReducer + immutableJS
        </p>
        
      </header>
      <Shopping/>
      
    </div>
  );
}

export default App;
