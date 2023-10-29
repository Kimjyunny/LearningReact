import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {

  const navigate = useNavigate();

  const goBack = () => {
    //이전 페이지로 이동 
    navigate(-1);
  }

  const goArticles = () => {
    //아티클스 경로로 이동 
    navigate('/articles', {replace:true}) //히스토리를 남기지 말라는 뜻 replace 
  }

  return (
    <div>
      <header style={{background:'beige', padding:16, fontSize:24}}>
        <button style={{ background: 'black', color: 'white', border:'none', borderRadius:20, padding:5, fontSize:13}} onClick={goBack}>뒤로가기</button>
        <button style={{ background: 'white', border:'none', borderRadius:20, padding:5, fontSize:13}} onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
       <Outlet/>
      </main>
    </div>
  )
}


export default Layout;