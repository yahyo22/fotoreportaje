import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <Styled >
      <Checkbox {...label} defaultChecked id='c'/>
      <label htmlFor="c">Запомнить меня</label>
    </Styled>
  );
}
const Styled = styled.div`
    display: flex;
    align-items: center;
    gap: 0px;
    label{
font-size: 18px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
      
color: #333333;
    }
`