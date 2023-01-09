import styled from "styled-components";

export const Container = styled.div`
`;

export const CardWrapper = styled.ul`
  
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  gap: 20px;

  list-style:none;

  > li > a {
    text-align: center;
    text-decoration: none;
  }

  > li > a > img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  > li {
    :hover {
        h3{color: #45f3ff;}
  }
  }
`;

export const FilmName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: white;
`;