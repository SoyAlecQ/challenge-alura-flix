import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 40px;
  margin-left: 20px;
`;

const LogoImage = styled.img`
  width: 168px;
  height: 40px;
  object-fit: contain;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <LogoImage src="/logo.png" alt="Logo Aluraflix" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
