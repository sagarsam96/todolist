import React, { useState } from "react";
import Styled from "styled-components";

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
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07)
;
transition: transform ease 0.5s;
:hover{
    transform: translateY(10px) translateX(-40px);
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
        <button id="del" onClick={() => deleteHandler(index)}>Delete</button>
      </Card>
    </>
  );
};
export default ListCard;
