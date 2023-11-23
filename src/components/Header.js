import styled from 'styled-components';


const HeaderWrapper = styled.div`
display:flex;
position:relative;
top:18px;
left:50%;
width:50%;
`

const StyledLink = styled.a`
cursor:pointer;
font-weight:bold;
margin-right:5px;
text-decoration:none;
color:white;
font-family:system-ui;
font-size:17px;
margin-left:45px;
&:hover{
    background-color:grey;
}
`;
const Header =() =>{
    return(
        <HeaderWrapper>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/aboutme">About me</StyledLink>
            <StyledLink href="/inspiration" >Inspiration</StyledLink>
            <StyledLink href="/mywork">My Work</StyledLink>
        </HeaderWrapper>
    )
};

export default Header;