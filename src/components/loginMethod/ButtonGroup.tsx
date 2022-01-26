import React from 'react';
import styled from 'styled-components';
enum VARIANT {
    SELECTED,
    DISABLED
}
interface IProps {
    variant?: VARIANT
}
const StyledHeaderDiv = styled.div`
display:flex;
flex-direction: row;
align-items:center;
justify-content: center;
margin-top:30px;
height:200;
width:100%;
`
const Buttons = styled.button<IProps>`
      display:flex;
      width:115px;
      align-items:center;
      padding: 0px 10px;
      align-items:center;
      justify-content: center;
      background-color:transparent;
      padding:10px;
      margin
      ${props => {
        console.log('perop', props.theme)
        switch (props.variant) {
            case VARIANT.SELECTED:
                return `color: ${props.theme.colors.text_200};
                 border-radius:20px;
                 border:1px solid #BEBEC2;
            `;
            case VARIANT.DISABLED:
            default:
                return `background-color:transparent; border:none; color: ${props.theme.colors.text_300};
              `;
        }
    }}`;

interface Props {
    className?: string;
    isPhone?: boolean;
    clicked: (val: boolean) => void

}
const ButtonGroup: React.FC<Props> = ({ className, isPhone, clicked }) => {
    return (
        <StyledHeaderDiv>
            <Buttons variant={isPhone == true ? VARIANT.DISABLED : VARIANT.SELECTED} onClick={() => { clicked(false) }} >Email</Buttons>
            <Buttons variant={isPhone == true ? VARIANT.SELECTED : VARIANT.DISABLED} onClick={() => { clicked(true) }} >Phone </Buttons>
        </StyledHeaderDiv>
    )
}
export default ButtonGroup;


