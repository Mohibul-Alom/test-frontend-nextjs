import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const HomeButton = styled.button`
  width: 100px;
  background-color: #44c767;
  border-radius: 10px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 10px 20px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  &:hover {
    background-color: #5fc72b;
  }
`;
