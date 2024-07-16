import styled from 'styled-components';

const TitleContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${(props) => props.$backgroundColor};
  margin-left: 2vw;
  margin-top: -2vh;
  width: 30%;
  height: 9vh;
  margin-bottom: 3vh;

  @media (max-width: 1024px) {
    margin-right: 2vw;
    margin-bottom: 1vh;
    height: 6vh;
    width: 50%;
  }

  @media (max-height: 600px) {
    height: 8vh;
    width: 40%;
  }

  @media (max-width: 430px) {
    width: 70%;
  }
`;

const TitleText = styled.h2`
  font-size: 4vh;
  color: #fff;

  @media (max-width: 1024px) {
    font-size: 3vh;
  }

  @media (max-height: 600px) {
    font-size: 5vh;
  }

  @media (max-width: 430px) {
    font-size: 2.5vh;
  }
`;

const Title = ({ $backgroundColor, children }) => {
  return (
    <TitleContainer $backgroundColor={$backgroundColor}>
      <TitleText>{children}</TitleText>
    </TitleContainer>
  );
};

export default Title;
