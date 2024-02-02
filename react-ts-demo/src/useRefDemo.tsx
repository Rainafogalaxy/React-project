import  React,{FC,useRef} from'react';

const RefDemo:FC = ()=>{
    const inputRef = useRef<HTMLInputElement>(null);
    function selectInput(){
       const inputElement =  inputRef.current;
       if(inputElement) inputElement.select();
    //    这里的inputElement就是个DOM节点,可以使用DOM上的方法
    }
    return <div>
        <input ref={inputRef} type="text" defaultValue="DohKyungSoo"/>
        <button onClick={selectInput}>选中 Input</button>
    </div>
}

export default RefDemo;