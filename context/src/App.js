import React from 'react';
import { ColorProvider } from './contexts/color';
import SelectColors from './component/SelectColors';
import ColorBox from './component/ColorBox';

function App () {
  return (
 <ColorProvider>
 <div>
  <SelectColors/>
  <ColorBox/>
 </div>
 </ColorProvider>
  );
};

export default App;