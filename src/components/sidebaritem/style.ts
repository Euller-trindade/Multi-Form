import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    @media (max-width: 960px) {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
      text-align: center;
    }
  }
`;
export const Info = styled.div`
  flex: 1;
  margin-right: 20px;
`;
export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
  color: #fff;
  @media (max-width: 960px) {
    text-align: center;
  }
`;
export const Description = styled.div`
  text-align: right;
  font-size: 13px;
  color: #b8b8d4;
  @media (max-width: 960px) {
    display: none;
  }
`;
export const IconArea = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  background-color: ${(props) => (props.active ? "#25cd89" : "#666666")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Point = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 3px solid #494a7c;
  margin-left: 30px;
  margin-right: -6px;
  background-color: ${(props) => (props.active ? "#25cd89" : "#666666")};
  @media (max-width: 960px) {
    margin: 30px 0px -36px 0px;
  }
`;
