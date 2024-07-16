import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 20px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 6vh;
  margin-bottom: 1vh;

  @media (max-width: 1024px) {
    margin: 6vh 0 1vh 0;
    font-size: 4vh;
  }
`;

const SubTitle = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 2.5vh;

  @media (max-width: 1024px) {
    font-size: 1.5vh;
    margin-bottom: 3vh;
  }
`;

const H3Container = styled.div`
  border-top: 3px solid #262626;
  border-bottom: 3px solid #262626;
  margin-bottom: 6vh;
  width: 95%;

  @media (max-width: 1024px) {
    margin-bottom: 3.2vh;
  }

  @media (max-width: 430px) {
    align-items: center;
    width: 90%;
  }
`;

const TitleH3 = styled.h3`
  color: #fff;
  font-size: 4vh;
  font-weight: normal;
  margin: 2vh 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 2vh 0;

  @media (max-width: 1024px) {
    font-size: 2vh;
    margin: 1vh 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 430px) {
    align-items: center;
  }
`;

const Containter2InpLbl = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 430px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ContainerInpYLbl = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 430px) {
    width: 100%;
    align-items: center;
  }
`;

const Label = styled.label`
  color: #fff;
  margin-bottom: 5px;
  width: 100%;
  padding-bottom: 10px;

  @media (max-width: 430px) {
    margin-left: 10vw;
  }
`;

const Input = styled.input`
  background: transparent;
  color: #fff;
  padding: 15px;
  border: 1px solid #fff;
  border-radius: 10px;
  box-sizing: border-box;
  width: 90%;
  margin-bottom: 20px;

  &.error {
    border-color: #c80505;
  }
`;

const Select = styled.select`
  background: #262626;
  color: #fff;
  padding: 15px;
  border: 1px solid #fff;
  border-radius: 10px;
  box-sizing: border-box;
  width: 90%;
  margin-bottom: 20px;

  &.error {
    border-color: #c80505;
  }
`;

const TextArea = styled.textarea`
  background: transparent;
  color: #fff;
  padding: 8px;
  border: 1px solid #fff;
  border-radius: 10px;
  box-sizing: border-box;
  height: 25vh;
  width: 45%;
  margin-bottom: 20px;

  &.error {
    border-color: #c80505;
  }

  @media (max-width: 430px) {
    width: 90%;
  }
`;

const Option = styled.option`
  background: #191919;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 2vw;
  width: 30%;

  @media (max-width: 1024px) {
    width: 30%;
    margin-bottom: 0;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: center;
    gap: 2vw;
    width: 50%;
  }
`;

const BtnSave = styled.button`
  background: transparent;
  padding: 10px 20px;
  border: 2px solid #2271d1;
  border-radius: 10px;
  color: #f5f5f5;
  font-weight: bold;
  font-size: 16px;
  width: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #1a5bb3;
    color: white;
  }

  @media (max-width: 430px) {
    width: 30vw;
  }
`;

const BtnClean = styled.button`
  background: transparent;
  padding: 10px 20px;
  border: 2px solid #f5f5f5;
  border-radius: 10px;
  color: #f5f5f5;
  font-weight: bold;
  font-size: 16px;
  width: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #2271d1;
    color: white;
  }

  @media (max-width: 430px) {
    width: 30vw;
  }
`;

const Error = styled.span`
  color: #c80505;
`;

export {
  Container,
  Title,
  SubTitle,
  H3Container,
  TitleH3,
  Form,
  Containter2InpLbl,
  ContainerInpYLbl,
  Label,
  Input,
  Select,
  TextArea,
  Option,
  BtnContainer,
  BtnSave,
  BtnClean,
  Error,
};
