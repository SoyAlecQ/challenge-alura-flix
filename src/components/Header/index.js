import styled from "styled-components";
import Logo from "./Logo";
import NavItems from "./NavItems";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #262626;
  height: 80px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavItems />
    </HeaderContainer>
  );
};

export default Header;
