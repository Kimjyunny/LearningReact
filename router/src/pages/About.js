import React from 'react';
import {  useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchPrams, setSearchParams] = useSearchParams();
  const detail = searchPrams.get('detail');
  const mode = searchPrams.get('mode')

  const onToggleDetail = () => {
    setSearchParams({mode, detail: detail === 'true' ? false : true})
  }

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({mode : nextMode, detail})
  }
  

  return (
    <div>
      <h1> 소개합니다.</h1>
      <p>리액트 라우터를 사용해보는 프로젝트 입니다.</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>ToggleDetail</button>
      <button onClick={onIncreaseMode}> mode +1</button>
    </div>
  );
};

export default About;