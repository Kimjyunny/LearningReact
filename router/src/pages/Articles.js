import React from 'react';
import { NavLink, Outlet} from 'react-router-dom';

const Articles = () => {
  return (

<div> 
<ul>
 <ArticleItem id = {1} />
 <ArticleItem id = {2} />
 <ArticleItem id = {3} />
</ul>
{/*Oulet중첩 자식을 나타내는 키워드 : <Route path='/articles' element={<Articles/>} /> */}
<Outlet/>
</div>
  );
};



const ArticleItem = ({id})  => {
  const activeStyle = {
    color : 'green',
    fontSize: 24,
  };
  return (
    <li>
      <NavLink 
        to = {`/articles/${id}`} 
        style={({isActive})=> (isActive ? activeStyle : undefined)}>
      게시글 {id}
      </NavLink>
    </li>
  )
 }


export default Articles;