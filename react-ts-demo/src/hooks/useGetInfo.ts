import { resolve } from 'path';
import {useState,useEffect} from 'react';

// 异步获取信息
// 此处表明这个函数的返回值应该是一个promise值，然后这个promise的值应该是一个string类型
function getInfo():Promise<string>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(Date.now().toString())
        },1500)
    })
}
const useGetInfo = ()=>{
    const [loading,setLoading] = useState(true);
    const [info,setInfo] = useState('');
    
    useEffect(()=>{
        getInfo().then((info)=>{
            setLoading(false);
            setInfo(info);
        })
    },[])

    return{loading,info};
}

export default useGetInfo;