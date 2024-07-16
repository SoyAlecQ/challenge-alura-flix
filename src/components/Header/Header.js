import styled from "styled-components";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.isTablet ? "#000000E5" : "#262626")};
  border-bottom: 2px solid #2271d1;
  box-shadow: 0px 5px 29px 0px #2271d1;
  padding: 30px;

  img {
    margin-left: 100px;
    width: ${(props) => (props.isTablet ? "16px" : "10vw")};
    height: ${(props) => (props.isTablet ? "3px" : "5vh")};

    @media (max-height: 600px) {
      width: 14vw;
      height: 8vh;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
`;

const Header = () => {
  const location = useLocation();

  const isTablet = window.innerWidth <= 1024;

  return (
    <HeaderStyled isTablet={isTablet}>
      <img src="/img/logo.png" alt="Logo de AluraFlix" />
      <ButtonContainer>
        <Button selected={location.pathname === "/"} to={"/"}>
          HOME
        </Button>
        <Button
          selected={location.pathname === "/nuevo-video"}
          to={"/nuevo-video"}
        >
          NUEVO VIDEO
        </Button>
      </ButtonContainer>
    </HeaderStyled>
  );
};

export default Header;
