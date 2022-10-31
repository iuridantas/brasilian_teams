import styled from 'styled-components';

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 60%;
  border: 1px solid white;
  border-radius: 15px;
  margin: 2% 1% 2% 1%;
  background: linear-gradient(45deg, black, transparent);
  h3 {
    font-size: 1.2rem;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  justify-content: space-evenly;
`;

type ButtonColor = {
  color: string;
};

export const Buttons = styled.button<ButtonColor>`
  border: none;
  background-color: ${(props) => props.color};
  cursor: pointer;
  width: 30%;
  height: 25px;
  border-radius: 10px;
  color: white;
`;
