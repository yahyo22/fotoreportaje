import React from 'react'
import styled from "styled-components";
export default function Button({children}:any) {
  return (
    <StyledButton>{children}</StyledButton>
  )
}
const StyledButton = styled.button`
  
`