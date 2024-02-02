import React, { FC, useState,useEffect } from "react";
import QuestionCard from "./components/QuestionCard";
import {produce} from'immer';

const List2: FC = () => {

// 第二个参数数组，是一个依赖(依赖于谁去触发这个函数的更新)
// 空数组表示这个函数的执行没有依赖，只有在组件初次渲染时才会执行这个函数

  const [questionList, setQuestionList] = useState([
    { id: "q1", title: "问卷1", isPublished: false },
    { id: "q2", title: "问卷2", isPublished: true },
    { id: "q3", title: "问卷3", isPublished: false },
    { id: "q4", title: "问卷4", isPublished: true },
    { id: "q5", title: "问卷5", isPublished: false },
  ]);
  useEffect(()=>{
    console.log("question list changed");
},[questionList])

//   新增问卷
  function add() {
    const randomSuji = Math.random().toString().slice(-3);
    // setQuestionList([
    //   ...questionList,
    //   { id: "q" + randomSuji, title: "问卷" + randomSuji, isPublished: false },
    // ]);
    setQuestionList(produce(draft=>{
        draft.push({
            id: "q" + randomSuji, 
            title: "问卷" + randomSuji, 
            isPublished: false
        })
    }))
  }
//   删除问卷
  function deleteQuestion(id: string) {
    // setQuestionList(questionList.filter(q=>{
    //     if(q.id!==id) return true;
    //     else return false;
    // }))
    setQuestionList(produce(draft=>{
        const index = draft.findIndex(q=>q.id===id);
        draft.splice(index,1)
    }))
  }
//   发布问卷
  function publishQuestion(id:string){
    // setQuestionList(
    //     questionList.map((item)=>{
    //         if(item.id !== id) return item;
    //         return {
    //             ...item,isPublished:true
    //         }
    //     })
    //     )
    setQuestionList(
        produce(draft=>{
            const q = draft.find(item=>item.id ===id);
            if(q) q.isPublished =true;
        })
    )
  }
  return (
    <div>
      <h1>问卷列表2</h1>
      <div>
        {questionList.map((item) => {
          const { id, title, isPublished } = item;
          return (
            <QuestionCard
              id={id}
              title={title}
              isPublished={isPublished}
              key={id}
              deleteQuestion={deleteQuestion}
              publishQuestion={ publishQuestion}
            />
          );
        })}
      </div>

      <div>
        <button onClick={add}>新增问卷</button>
      </div>
    </div>
  );
};

export default List2;
