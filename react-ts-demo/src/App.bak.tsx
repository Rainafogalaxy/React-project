import React from "react";
// import "./App.css";
import type { MouseEvent } from "react";
// JSX：
// 所有jsx语法中，标签必须要闭合，每个jsx片段中只能有一个根节点
// jsx语法中，
// 1.class要写为className(因为class是一个关键字)
// 2.内嵌样式style，首先要写两个花括号，然后属性名用驼峰式命名,属性值要用对象的形式(属性值加引号)
// 3.for要改为htmlFor(也不是很常用)
// 4.关于括号：使用{xxx}可以插入JS变量，函数，表达式

// 事件：
// 1.使用onXxx的形式
// 2.必须传入一个函数( 是fn而不是fn() )   (函数名在这里后面不用加括号，不用加括号！)

// TS:
// 泛型：
// function print<T>(info: T) {
//   console.log(info);
// }
//   print<number>(50)

// 条件判断：
// 1.使用&&
// 2.使用三元表达式
// 3.使用函数

// 副作用useEffect()：
// 当组件渲染完成后或某个state更新时，加载一个Ajax网络请求，可以使用useEffect()实现
// tip：任何state更新都会触发组件的更新(就是重新执行函数，然后返回新的jsx，页面重新渲染)
// 为什么useEffect会执行两次？  (这里执行两次是仅在开发环境下的，react模拟了组件创建，销毁以及再创建的流程，为了及早暴露问题) (生产环境下只会执行一次，生产环境是指将代码发布到服务器)

// 其他内置Hooks：
// useRef()   一般用于操作DOM,也可以传入普通JS变量,但更新不会触发重新渲染(要和Vue3的ref区分开)

function App() {
  // 用于演示的函数(没用)
  const fn = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); //阻止默认事件发生
    event.stopPropagation(); //阻止冒泡
  };

  const flag = false;
  function LinkAndZelder(){
    if(flag) return <p>I Love DohKyungSoo</p>
    return <p>KyungSoo is the most adorable boy in this world</p>
  }

  const list = [
    {username:"KyungSoo",name:"暻秀"},
    {username:"HoneyClock",name:"可爱"},
    {username:"HoneyBeast",name:"漂亮"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        
        <ul>
          {list.map((user)=>{
            const {username,name} = user;
            return <li key={username} style={{listStyle:"none"}}>{name}</li>
          })}
        </ul>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          {flag && <p>The Legend Of Zelder</p>}
          {flag?<p>Link is a cute boy</p>:<p>Zeler is a brave girl</p>}
          <LinkAndZelder/> 
          {/* 这里注意，首字母小写的组件会报错 ，上边定义的函数在这里用就是个组件 */}
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

