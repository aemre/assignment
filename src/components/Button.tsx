import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight'
// const Button = styled('button')(
//     variant({
//       scale: 'buttons',
//       variants: {
//         primary: {
//           color: 'black',
//           bg: 'primary',
//         },
//         secondary: {
//           color: 'white',
//           bg: 'secondary',
//         },
//       },
//     })
//   )
//   export  {Button};

enum VARIANT {
  PRIMARY,
  SECONDARY,
  DISABLED
}
interface IProps {
  variant?: VARIANT
}
const RedZap = styled(ChevronRight)`
  color: white;
width:12px;
  margin-left:12px`

const Buttons = styled.button<IProps>`
    display:flex;
    width:115px;
    margin: 8px;
    border-radius:10px;
    padding: 0px 10px;
    align-items:center;
    justify-content: space-between;
    color:white;
    padding:20px;
    ${props => {
    console.log('perop', props.theme)
    switch (props.variant) {
      case VARIANT.SECONDARY:
        return `background-color: ${props.theme.colors.text_200};
          `;
      case VARIANT.PRIMARY:
      default:
        return `background-color: ${props.theme.colors.accent_2};
            `;
    }
  }}`;

interface Props {
  className?: string;
  fontSize?: any;
  color?: string;
}
const Button: React.FC<Props> = ({ className, children }) => {
  return (
    <Buttons className={className}>
      {children}
      <RedZap />
    </Buttons>
  )
}
export default Button;