import React,{FC} from 'react';
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

  function edit(id: string) {
    console.log("edit", id);
  }
    return (
        <div>
          <h1>问卷列表页</h1>
          <div>
            {questionList.map((item) => {
              const { id, title, isPublished } = item;
              return (
                <div key={id} className="list-item">
                  <strong>{title}</strong>
                  &nbsp;
                  {/* 条件判断 */}
                  {isPublished ? (
                    <span style={{ color: "green" }}>已发布</span>
                  ) : (
                    <span style={{ color: "red" }}>未发布</span>
                  )}
                  &nbsp;
                  <button
                    onClick={() => {
                      edit(id);
                    }}
                  >
                    编辑问卷
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      );
};

export default List1;