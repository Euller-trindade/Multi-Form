import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 0;
  border-bottom: 2px solid #25cd89;

  @media (max-width: 960px) {
    text-align: center;
    margin: 0 20px;
  }

  h1 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 28px;
  }
  p {
    font-size: 14px;
    color: #25cd89;
    font-weight: bold;
  }
`;
