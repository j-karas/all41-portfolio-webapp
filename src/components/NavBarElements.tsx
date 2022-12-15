import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.div`
  background: linear-gradient(to right, white 500px, magenta);
  height: 85px;
  display: flex;
  justify-content: space-between;
`;
  
export const NavLink = styled(Link)`
  color: white;
  display: inline-block;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  border: 3px solid magenta;
  background: magenta;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  &:hover,
  &:focus{
    color: #98F3C4;
  }
  &:active{
    color: #98F3C4;
  };
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #D3FFF3;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;