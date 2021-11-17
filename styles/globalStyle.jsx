import styled from "styled-components";
import { device } from "./breakpoint";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin: 0 auto;

  @media ${device.md} {
    width: 750px;
  }

  @media ${device.lg} {
    width: 970px;
  }
  @media ${device.xl} {
    width: 1170px;
  }

  @media print {
    padding: 20px 15px;
    margin: 0 auto;
    width: 1170px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex: wrap;
`;

export const Col12 = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

export const Col6 = styled.div`
  flex: 0 0 auto;
  width: 50%;
`;

export const Button = styled.button`
  width: 30%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: inset 0px 1px 0px 0px #bbdaf7;
  background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
  background-color: #79bbff;
  border-radius: 6px;
  border: 1px solid #84bbf3;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  /* padding:6px 24px; */
  padding: 6px 6px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;
  text-align: center;

  /* &:hover {
        background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
        background-color:#378de5;
    } */
  &:active {
    position: relative;
    top: 1px;
  }
`;
