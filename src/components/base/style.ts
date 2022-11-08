import styled from 'styled-components';

export const HeaderComponent = styled.section`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  padding: 10px;
  background-color: rgba(207, 181, 59, 0);
`;

export const HeaderButtons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    border: none;
    border-radius: 100px;
    cursor: pointer;
    background-color: transparent;
    padding: 10px;
    color: white;
    margin: 0px 5px 0px 5px;
  }
`;
