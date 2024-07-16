import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  background: #000000e5;
  border-top: 2px solid #2271d1;
  box-shadow: 0px 5px 29px 0px #2271d1b2;
  margin-top: 5vh;

  @media (max-width: 430px) {
    padding: 15px;
  }

  img {
    width: 8vw;
    height: 5vh;

    @media (max-width: 1024px) {
      width: 18vw;
      height: 4vh;
      padding: 1vh 0;
    }

    @media (max-width: 430px) {
      width: 10vw;
      height: 5vh;
      padding: 0;
    }

    @media (max-height: 600px) {
      width: 14vw;
      height: 10vh;
      padding: 0;
    }
  }
`;

const BtnsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6vw;
`;

const BtnHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2271d13d;
  border: 2px solid #2271d1;
  color: #fff;
  width: 35vw;
  border-radius: 30px;
  gap: 1vw;
`;

const BtnAddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  margin-left: 5vw;
`;

const Text = styled.p`
  font-size: 2.5vh;
  font-weight: bold;
  color: #2271d1;
  margin: 2vh 0 1.5vh 0;
`;

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <FooterStyled>
      {isMobile ? (
        <BtnsContainer>
          <Link to="/">
            <BtnHomeContainer>
              <img src="img/home.png" alt="Home" />
              <Text>HOME</Text>
            </BtnHomeContainer>
          </Link>
          <Link to="/nuevo-video">
            <BtnAddContainer>
              <img src="/img/NuevoVideo.png" alt="Nuevo Video" />
            </BtnAddContainer>
          </Link>
        </BtnsContainer>
      ) : (
        <img src="/img/logo.png" alt="Logo de AluraFlix" />
      )}
    </FooterStyled>
  );
};

export default Footer;
