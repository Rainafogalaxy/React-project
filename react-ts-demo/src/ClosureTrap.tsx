import React,{FC,useState,useRef,useEffect} from 'react';
// 演示闭包陷阱
// 
const TrapDemo:FC=()=>{
    const [count,setCount] = useState(0);
    const countRef = useRef(0);
    useEffect(()=>{
        countRef.current = count;
    },[count])
    function add(){
        setCount(count+1);
    }
    function alertFn(){
        setTimeout(()=>{
            // alert(count);
            alert(countRef.current)
        },3000)
    }
    return <>
    <p>闭包陷阱</p>
    <span>{count}</span>
    <button onClick={add}>Click Me!</button>
    <button onClick={alertFn}> Click Me Alert!</button>
    </>
}

export default TrapDemo;