import styled from "styled-components";

export const Container = styled.div`
  background-color: #242739;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  display: flex;
  flex-direction: column;
`;
export const Steps = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Slidebar = styled.div`
  width: 250px;
  border-right: 2px solid #25cd89;

  @media (max-width: 960px) {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #16195c;
    justify-content: space-around;
  }
`;
export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
  @media (max-width: 960px) {
    padding: 20px;
  }
`;
