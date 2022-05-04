import React, { useState } from "react";
import Styled from "styled-components";
import Dustbin from '../assets/dustbin.png'

const Card = Styled.div`
display: flex;
justify-content: space-between;
width: 20rem;
padding: 10px;
align-items: center;
border-radius: 8px;
min-width: 300px;
box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05)
;

overflow: hidden;
z-index:1;
transition: transform ease 0.5s;
:hover{
    transform: translateY(10px) translateX(-40px); scale(1.1);
    z-index: 500;
    color:rgb(33, 85, 205);
    background: #79DAE8;
}
:nth-of-type(2n) {
  :hover{
    background: #FEE2C5;
    color: #EB5353;
  }
}
:nth-of-type(4n) {
  :hover{
    background: #B9F8D3;
    color:#006E7F;
  }
}
`;
const Content = Styled.div`
display: flex;
gap: 10px;
width: 100rem;
`;

const ListCard = ({ x, index, deleteHandler }) => {
  const [isChecked, setisChecked] = useState(false);
  const handleOnChange = () => {
    setisChecked(!isChecked);
  };
  return (
    <>
      <Card key={index}>
        <Content>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleOnChange}
          />
          {!isChecked && <li>{x.text}</li>}
          {isChecked && (
            <li style={{ textDecoration: "line-through" }}>{x.text}</li>
          )}
        </Content>
        <button id="del" onClick={() => deleteHandler(index)}>
          <img src={Dustbin} alt="dustbin" id="dust"
          style={{width: "60%"}}/>
        </button>
      </Card>
    </>
  );
};
export default ListCard;
