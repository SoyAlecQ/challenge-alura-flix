import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const NavItemsContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;
  width: 100%;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => (props.isSelected ? "#2271D1" : "#fff")};
  font-weight: 700;
  border: ${(props) =>
    props.isSelected ? "2px solid #2271D1" : "2px solid #fff"};
  padding: 10px 20px;
  border-radius: 8px;
  background-color: transparent;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #262626;
      filter: drop-shadow(0 0 3px #2271d1) drop-shadow(0 0 3px #2271d1)
        contrast(1) brightness(1);
      transition: 0.5s;
      color: #2271d1;
      border: 2px solid #2271d1;
    `}
`;

const NavItems = () => {
  const [selectedItem, setSelectedItem] = useState("home");

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };
  return (
    <nav>
      <NavItemsContainer>
        <NavItem>
          <NavLink
            to="/"
            isSelected={selectedItem === "home"}
            onClick={() => handleSelectItem("home")}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/nuevo-video"
            isSelected={selectedItem === "nuevo-video"}
            onClick={() => handleSelectItem("nuevo-video")}
          >
            Nuevo vídeo
          </NavLink>
        </NavItem>
      </NavItemsContainer>
    </nav>
  );
};

export default NavItems;
