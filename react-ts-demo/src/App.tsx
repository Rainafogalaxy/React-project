import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // 所有jsx语法中，标签必须要闭合，每个jsx片段中只能有一个根节点
    // jsx语法中，
    // 1.class要写为className(因为class是一个关键字)
    // 2.内嵌样式style，首先要写两个花括号，然后属性名用驼峰式命名,要用对象的形式(属性值要加引号)
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{color:"pink",backgroundColor:"skyblue"}}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
