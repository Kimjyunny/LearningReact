
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Profile from './pages/Profile';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Layout/>}> 
      {/* 레이아웃과 홈의 path가 /로 같으니까, 홈을 index로 처리한다.  */}
        <Route index element={<Home/>} /> 
        <Route path='/about' element={<About/>} />
        <Route path='/profiles/:username' element={<Profile/>} />
      </Route>
      
      <Route path='/articles' element={<Articles/>} >
        <Route path=':id' element={<Article/>} /> 
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/mypage' element={<MyPage/>}/>
      {/*NotFound는 위에꺼 다 처리하고 남은 전체를 notFound처리기 때문에 맨 위에 작성하면 안되다. */}
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App;
