import React from 'react'
import styled from "styled-components";
// imges
import Rockstar from "../../assets/img/Rockstar.png"
import Navbar from '../navbar/Navbar';
export default function Header() {
  return (
    <StyledHeader>
    <div className="container">
    <Navbar/>
    <head>
        
    </head>
        </div>
    </StyledHeader>
  )
}
const StyledHeader = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.3) 0.01%, rgba(0, 0, 0, 0.3) 100%), url(${Rockstar});
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;

`
