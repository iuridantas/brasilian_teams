import styled from 'styled-components';

export const CardDiv = styled.div`
  margin: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  div{
    display: flex;
    margin: 2% 1% 2% 1%;
    background: linear-gradient(45deg,#00000038,transparent);
  }
  img {
    width: 300px;
    height: 300px;
    margin: 2%;
  }
`;
