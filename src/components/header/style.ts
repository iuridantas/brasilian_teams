import styled from 'styled-components';

export const HeaderComponent = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(192,192,192);
`;

export const HeaderLogo = styled.section`
  display: flex;
  padding-left: 5px;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    display: flex;
    color: white;
  }
  h1 {
    padding-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    background-color: rgba(207,181,59, 0.6);
    padding: 10px;
    color: white;
    margin: 0px 5px 0px 5px;
  }
`;
