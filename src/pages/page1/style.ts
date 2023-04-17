import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 16px;
    padding: 0;
  }
  h1 {
    margin: 0;
    color: #fff;
    padding: 0;
    font-size: 26px;
  }
  hr {
    height: 1px;
    border: 0;
    background-color: #25cd89;
    margin: 30px 0;
  }
  label {
    font-size: 13px;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #25cd89;
      border-radius: 10px;
      color: #000;
      outline: 0;
      font-size: 15px;
    }
  }
  button {
    background-color: #25cd89;
    color: #fff;
    border: none;
    font-size: 14px;
    padding: 20px 40px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 30px;
  }
`;
