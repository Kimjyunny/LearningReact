import { useCallback, useRef, useReducer } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos(){
  const array = []
  for (let i = 1; i <=2500; i++) {
    array.push({
      id : i,
      text: `할 일 ${i}`,
      checked: false,
    })
  }
  return array
}

function todoReducer(todos, action){
  switch(action.type){
    case 'INSERT' : //새로추가
    //{type:'INSERT', todo:{id:1, text:'todo', checked:false}}
    return todos.concat(action.todo);
    case 'REMOVE'://제거
     //{type:'REMOVE', id:1}
    return todos.filter(todo => todo.id !==action.id);
    case 'TOGGLE' : //토글
    //{type:'TOGGLE', id:1}
    return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} :todo);
      default: return todos;  
  }
}

const App = () =>  {
  // const [todos,setTodos] = useState([ //대괄호는 배열, 초기값을 todos에다 넣겟다
  //   {id: 1, text: '리액트의 기초 알아보기', checked: true, },
  //   {id: 2, text: '컴포넌트 스타일링 해보기', checked: true, },
  //   {id: 3, text: '일정관리 앱 만들어보기', checked: false, },
  // ]);
  // const nextID = useRef(4)
  const [todos, dispatch] = useReducer(todoReducer,undefined, createBulkTodos)
  const nextID = useRef(2501) //지역변수 2501번부터 시작해라
 
  const onInsert = useCallback(
    (text) => {
      const todo ={
      id: nextID.current,
      text,
      checked: false,
      };//id:4, 집에가서 맛잇는거 먹기, false
      dispatch({type:'INSERT', todo})
      nextID.current += 1 //nextId 1씩 더하기
    },
    []
  );

  const onRemove = useCallback(
    (id) => {
      dispatch({type:'REMOVE', id})
    },
    []
  )

  const onToggle = useCallback(
    (id) => {
      dispatch({type:'TOGGLE', id})
      // setTodos( todos =>
      //   todos.map((todo)=>
      //   //todo.id === id 일때 true라면 해당 id를 가진 todo의 checked 상태가 반대로 변환(토글된 새로운배열(객체)을 만들어내게되고 아니라면 그대로 반환)
      //   todo.id === id ? { ...todo, checked: !todo.checked} : todo,
      //   )//setTodos의 파라미터
      // )
    },
    [],
  )
   
  return(
    <TodoTemplate> 
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos = {todos} onRemove={onRemove} onToggle={onToggle}/> 
    </TodoTemplate> //보통 똑같이 씀 props
  ) 
}
//TodoTemplate태그 안에 있는 애들이 children
export default App;
