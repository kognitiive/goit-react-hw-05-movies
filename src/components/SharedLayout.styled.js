import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #45f3ff;

  color: #45f3ff;
  background-color: #1c1c1c;

  > nav > ul {
    display: flex;
    list-style: none;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  margin: 0 5px;
  border-radius: 4px;
  text-decoration: none;
  color: #45f3ff;
  font-weight: 500;

  &.active {
    color:  #1c1c1c;
    background-color:#45f3ff;
  }

  :hover{
    color:  #1c1c1c;
    background-color:#45f3ff;
  }
`;

