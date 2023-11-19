const loggerMiddleware = store => next => action => {
  //미들웨어 기본 구조
  console.group(action && action.type);// 액션이 맞으면 타입으로 log를 그룹화함
  console.log('이전 상태', store.getState());
  console.log('액션', action)
  next(action);//다음 미들웨어 혹은 리듀서에게 전달
  //next(acton)을 호출하면 그 다음 처리해야 할 미들웨어에게 액션을 넘겨주고 리듀서에게 액션을 넘겨준다는 것 
  console.log('다음 상태', store.getState()); //업데이트의 상태
  console.groupEnd();//그룹끝
}


export default loggerMiddleware;



// const loggerMiddleware = function loggerMiddleware(store){
//   return function(next){
//     return function(action){
//       //미들웨어 기본 구조 
//     };
//   };
// };
