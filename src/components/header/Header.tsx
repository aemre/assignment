
import styled from 'styled-components'
import HeaderIcon from './HeaderIcon';


const StyledCloseIcon = styled(HeaderIcon)`
    display:flex;
    width: 24px;
    height: 24px;
`;
const StyledText = styled.h1`
    display:flex;
    text: HomePAge
    font-size: 1.5em;
    color: palevioletred;
    with:auto   

`

const StyledHeaderDiv = styled.div`
display:flex;
flex-direction: row;
height:200;
width:100%;
align-items:center;
justify-content: center;
background:#F5F5F5;
border: 1px solid #DFDFE0
`
interface Props {
    className?: string;
    props: any
}
const Header: React.FC<Props> = ({ className, children, props }) => {
    return (
        <StyledHeaderDiv>
            <StyledCloseIcon></StyledCloseIcon>
            <StyledText >HomePage</StyledText>
        </StyledHeaderDiv>
    )
}
export default Header;