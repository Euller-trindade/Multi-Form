import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 16px;
    padding: 0;
  }
  h1 {
    text-align: center;
    color: #fff;
    padding: 0;
    font-size: 24px;
  }
  h2{
    
    font-size: 18px;
  }
  h3{
    font-size: 15px;
  }
  hr {
    height: 1px;
    border: 0;
    background-color: #25cd89;
    margin: 10px 0;
  }
  label {
    font-size: 13px;
    display: block;
    margin-bottom: 20px;

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
  .backButton {
    font-size: 14px;
    padding: 18px 40px;
    color: #b8b8d4;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    margin-top: 30px;
    border: 1px solid #25cd89;
    border-radius: 10px;
  }
`;
