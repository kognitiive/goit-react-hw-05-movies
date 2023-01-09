import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.div`
width:50%;
    display: inline-flex;
  align-items: center;
  justify-content: center;
  left: 25%;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;`

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 1px solid #45f3ff;
  border-radius: 5px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  color: #45f3ff;
  background-color: #1c1c1c;
  
  &::placeholder{
    color: #4548ff;
    font: inherit;
  font-size: 18px;
  }
  `;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
  fill: #4548ff;
`