import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight'
import { useNavigate } from "react-router-dom";

export enum VARIANT {
  PRIMARY,
  SECONDARY,
  DISABLED
}
interface IProps {
  variant: VARIANT
}
const RedZap = styled(ChevronRight)`
  color: white;
width:12px;
  margin-left:12px`

const Buttons = styled.button<IProps>`
    display:flex;
    margin: 8px;
    border-radius:10px;
    padding: 0px 10px;
    align-items:center;
    justify-content: center;
    color:white;
    padding:20px;
    margin: 0 auto;
    ${props => {
    console.log('perop', props.theme)
    switch (props.variant) {
      case VARIANT.SECONDARY:
        return `background-color: ${props.theme.colors.text_200};
          `;
      case VARIANT.DISABLED:
        return `background-color: ${props.theme.colors.text_500};
        pointer-events: none; 
          `;
      case VARIANT.PRIMARY:
      default:
        return `background-color: ${props.theme.colors.accent_2};
        
            `;
    }
  }}`;

interface Props {
  className?: string;
  variant: VARIANT;
  navigateRouteName: string;
}
const Button: React.FC<Props> = ({ className, children, variant, navigateRouteName }) => {
  const navigate = useNavigate();
  return (
    <Buttons className={className} variant={variant} onClick={() => {
      navigate(navigateRouteName, { replace: false });
    }} >
      {children}
      <RedZap />
    </Buttons>
  )
}
export default Button;