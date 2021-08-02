import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 50px;

  border: 5px solid #fca311;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #61d738;
  font-size: 10px;
  font-family: "Press Start 2P", cursive;

  background-color: #000;

  margin: 10px auto;
  :active {
    background-color: #2c2d2f;
  }
`;

export { Button };
