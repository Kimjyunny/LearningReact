import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss'

const TodoList = ({todos, onRemove, onToggle }) => { //()안에 props를 전달 받아야함
  return (
    <div className='TodoList'>
      {/* <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/> //반복처리하면 안됨 ==> map으로 처리하기*/}
      {todos.map((todo)=>(
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      ))} 
    </div>//map을 이용해서 하나하나 전달할 수 있게 하기, map을 이용하면 유니크 키 필수 key
    //{todos.map((todo)=>// {id: 1, text: '리액트의 기초 알아보기', checked: true, }을 접근함, map을 돌면서 다음 껄 통채로 접근함 
  );
};

export default React.memo(TodoList);