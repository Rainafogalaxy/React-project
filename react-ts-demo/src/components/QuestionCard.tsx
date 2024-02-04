import React, { FC, useEffect} from "react";
import classnames from "classnames";
import style from "./QuestionCard.module.scss";

type PropsType = {
  id: string;
  title: string;
  isPublished: boolean;
  deleteQuestion?:(id:string) => void;  //表示没有返回值
  publishQuestion?:(id:string)=>void;
};
const QuestionCard: FC<PropsType> = (props) => {
  const { id, title, isPublished ,deleteQuestion,publishQuestion} = props;
  function publish(id: string) {
    publishQuestion && publishQuestion(id);
  }
  function del(id:string){
    deleteQuestion && deleteQuestion(id)
  }

  // let itemClassName = "list-item";
  // if(isPublished) itemClassName += ' published';
  // const itemClassName = classnames('list-item',{published:isPublished})
  // const itemClassName = classnames({
  //   'list-item':true,
  //   published:isPublished
  // })

  const listItemClass = style['list-item'];
  const publishedClass = style.published;
  const itemClassName = classnames({
    [listItemClass]:true,
    [publishedClass]:isPublished,
  })
  return (
    <div key={id} className={itemClassName}>
      <strong>{title}</strong>
      &nbsp;
      {/* 条件判断 */}
      {isPublished ? (
        <span className={style['published-span']}>已发布</span>
      ) : (
        <span className={style["unpublish-span"]}>未发布</span>
      )}
      &nbsp;
      <button
        onClick={() => {
          publish(id);
        }}
      >
        发布问卷
      </button>
      &nbsp;
      <button onClick={()=>{
        del(id);
      }}>删除问卷</button>
    </div>
  );
};

export default QuestionCard;
