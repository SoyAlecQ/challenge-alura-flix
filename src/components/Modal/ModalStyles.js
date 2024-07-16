import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;

  &.show {
    display: flex;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #03122f;
  color: white;
  padding: 20px;
  border: 5px solid #6bd1ff;
  border-radius: 10px;
  min-width: 35vw;
  height: 100vh;

  @media (max-width: 1024px) {
    min-width: 50vw;
    height: auto;
    max-height: 100vh;
  }

  @media (max-width: 430px) {
    min-width: 70vw;
    max-height: 84vh;
  }

  @media (max-height: 600px) {
    max-width: 100vw;
    max-height: 95vh;
    padding: 20px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 0;
`;

export const TituloContainer = styled.div`
  display: flex;
  width: 25vw;
  justify-content: start;

  @media (max-width: 430px) {
    justify-content: center;
  }
`;

export const TituloStyled = styled.h2`
  color: #2271d1;
  font-size: 2vw;

  @media (max-width: 430px) {
    font-size: 2.5vh;
  }
`;

export const CloseButton = styled.img`
  width: 1.8vw;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 4vw;
  }

  @media (max-width: 430px) {
    width: 6vw;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #fff;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  background: #03122f;
  color: #fff;
  padding: 8px;
  border: 3px solid #2271d1;
  border-radius: 10px;
  box-sizing: border-box;
  width: 25vw;
  height: 7vh;
  margin-bottom: 20px;

  &.error {
    border-color: #c80505;
  }

  @media (max-width: 1024px) {
    width: 40vw;
  }

  @media (max-width: 430px) {
    width: 60vw;
    height: 6vh;
    font-size: 1.5vh;
  }
`;

export const Select = styled.select`
  background: #03122f;
  color: #fff;
  padding: 8px;
  border: 3px solid #2271d1;
  border-radius: 10px;
  box-sizing: border-box;
  width: 25vw;
  margin-bottom: 20px;

  &.error {
    border-color: #c80505;
  }

  @media (max-width: 1024px) {
    width: 40vw;
  }

  @media (max-width: 430px) {
    width: 60vw;
    height: 6vh;
    font-size: 1.5vh;
  }
`;

export const TextArea = styled.textarea`
  background: #03122f;
  color: #fff;
  padding: 8px;
  border: 3px solid #2271d1;
  border-radius: 10px;
  box-sizing: border-box;
  width: 25vw;
  margin-bottom: 20px;
  height: 12vh;
  resize: none;

  &.error {
    border-color: #c80505;
  }

  @media (max-width: 1024px) {
    width: 40vw;
  }

  @media (max-width: 430px) {
    width: 60vw;
    height: 10vh;
    font-size: 1.5vh;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const BtnSave = styled.button`
  background: #000000e5;
  box-shadow: 0px 0px 6px 4px #2271d1 inset;
  padding: 10px 20px;
  border: 2px solid #2271d1;
  border-radius: 10px;
  color: #2271d1;
  font-weight: bold;
  font-size: 2vh;
  width: 8vw;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #1a5bb3;
    color: white;
  }

  @media (max-width: 1024px) {
    width: 14vw;
    font-size: 1.5vh;
  }

  @media (max-width: 430px) {
    width: 30vw;
    height: 5vh;
    font-size: 1.8vh;
  }
`;

export const BtnClean = styled.button`
  background: transparent;
  padding: 10px 20px;
  border: 2px solid #f5f5f5;
  border-radius: 10px;
  color: #f5f5f5;
  font-weight: bold;
  font-size: 2vh;
  width: 8vw;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #2271d1;
    color: white;
  }

  @media (max-width: 1024px) {
    width: 14vw;
    font-size: 1.5vh;
  }

  @media (max-width: 430px) {
    width: 30vw;
    height: 5vh;
    font-size: 1.8vh;
  }
`;

export const ErrorText = styled.p`
  color: #c80505;
`;
