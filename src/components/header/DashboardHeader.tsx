
import styled from 'styled-components'
import DashboardLeftIcon from './DashboardLeftIcon';
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
justify-content: space-between;
background:#F5F5F5;
align-content:center
border: 1px solid #DFDFE0
`
const StyledIconDiv = styled.div`
justify-content: center;
margin:auto 10px;
align-content:center;
`
interface Props {
    className?: string;
}
const DashboardHeader: React.FC<Props> = ({ className }) => {
    return (
        <StyledHeaderDiv>
            <StyledIconDiv>
                <DashboardLeftIcon />
            </StyledIconDiv>
            <StyledText>HomePage</StyledText>
        </StyledHeaderDiv>
    )
}
export default DashboardHeader;