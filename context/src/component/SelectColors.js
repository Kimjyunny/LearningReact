import React from "react";
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink","black"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
      {({actions})=> (
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => actions.setColor(color)} //우리가 클릭한 색깔로 바뀌어라 
                onContextMenu={e=> { //오른쪽 마우스를 클릭했을때 이벤트 명
                  e.preventDefault(); //오른쪽 마우스 클릭했을때 메뉴창 뜨지 말아라
                  actions.setSubcolor(color)
                }}
            />
          ))}
        </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;
