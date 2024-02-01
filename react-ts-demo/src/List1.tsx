import React,{FC} from 'react';
import './List1.css'
import QuestionCard from './components/QuestionCard'
// import type {FC} from 'react'
// tip:FC是一个TS类型
const List1:FC = ()=>{
      // 问卷列表数据
  const questionList = [
    { id: "q1", title: "问卷1", isPublished: false },
    { id: "q2", title: "问卷2", isPublished: true },
    { id: "q3", title: "问卷3", isPublished: false },
    { id: "q4", title: "问卷4", isPublished: true },
    { id: "q5", title: "问卷5", isPublished: false },
  ];

 
    return (
        <div>
          <h1>问卷列表页</h1>
          <div>
            {questionList.map((item) => {
              const { id, title, isPublished } = item;
              return (
                <QuestionCard id={id} title={title} isPublished={isPublished} key={id}/>
              );
            })}
          </div>
        </div>
      );
};

export default List1;