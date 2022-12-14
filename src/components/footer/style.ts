import styled from 'styled-components';

export const FooterComponent = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: rgba(192, 192, 192);
  padding: 5px 10px 5px 15px;
  bottom: 0;
  a {
    color: black;
    cursor: pointer;
    font-size: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  a:hover {
    color: white;
  }
`;
