import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss'

import React, { useCallback, useState } from 'react';

const TodoInsert = ({onInsert}) => {
const [value, setValue] = useState(''); //변수 value의 초깃값은 공백, todos에 있는 todo값을 value로 처리에서 onInsert로 전송 
const onChange = useCallback((e)=> {
  setValue(e.target.value) //실제로 value값을 감지하는 기능이 포함됨
}, [])

const onSubmit = useCallback(
  (e)=> {
    onInsert(value)
    setValue('')
    e.preventDefault(); //기본동작취소 --> 새로고침 할 필요가 없음 , js에 a태그에서 많이 사용 
  },
  [onInsert, value]
)

  return (
 <form className='TodoInsert' onSubmit={onSubmit}> 
  <input placeholder='할 일을 입력하세요' value= {value} onChange={onChange} /> 
  <button type='submit'> 
    <MdAdd/> 
  </button>
 </form>
  );
};

export default TodoInsert;