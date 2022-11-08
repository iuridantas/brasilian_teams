import styled from 'styled-components';

export const HeaderComponent = styled.section`
  display: flex;
  width: 90%;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(207, 181, 59, 0);
`;

export const HeaderLogo = styled.section`
  display: flex;
  padding-left: 5px;
  justify-content: center;
  align-items: center;
  h2 {
    padding-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
`;

export const HeaderButtons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: rgb(20 18 8 / 50%);
    padding: 10px;
    color: white;
    margin: 0px 5px 0px 5px;
    :hover {
      background-color: white;
      color: black;
    }
  }
`;
