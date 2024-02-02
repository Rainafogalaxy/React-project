import {useEffect,useState} from 'react';

// 获取鼠标位置
function useMouse(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const mouseMoveHandler  = (event:MouseEvent)=>{
        setX(event.clientX);
        setY(event.clientY);
    }
    useEffect(()=>{
        // 监听鼠标事件
        window.addEventListener("mousemove",mouseMoveHandler);
        // 组件销毁时,一定要解绑DOM事件,否则会出现内存泄露的问题
        
    },[x,y])
}
// 那个组件用了这个useMouse,这个useEffect()就对哪个组件起作用

export default useMouse;