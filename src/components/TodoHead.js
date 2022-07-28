import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import moment from "moment";
import { MdAdd, MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  let now = moment(moment.now()).format("YY/MM/DD HH:mm:ss");
  const [date, setDate] = useState(now);

  const inetervalid = useRef(null);

  useEffect(() => {
    // inetervalid.current = setInterval(() => {
    //   setDate(moment(moment.now()).format("YY/MM/DD HH:mm:ss"));
    // }, 1000);
  }, []);

  const onClick = () => {
    clearInterval(inetervalid.current);
  };
  const todos = useSelector(state => state.todos);
  const [count, setCount] = useState(todos.length);

  useEffect(() => {
    let cnt = 0;
    todos.map(todo => {
      if (!todo.done) {
        cnt++;
      }
    });
    setCount(cnt);
  }, [todos]);

  // useEffect(() => {}, [count]);
  return (
    <TodoHeadBlock>
      <h1>{date}</h1>
      <button style={{ float: "right" }} onClick={onClick}>
        정지
        <MdDelete />
      </button>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 {count}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
