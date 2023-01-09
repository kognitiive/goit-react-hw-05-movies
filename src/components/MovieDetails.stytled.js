import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
margin: 0 auto;
padding: 0 16px;
> h2, h3 {
    color:#45f3ff;
}
`;

export const List = styled.ul`
list-style: none;
display: flex;
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