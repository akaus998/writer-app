import Header from "./Header";
import styled from 'styled-components';
import ak from '../images/ak.png';
const Wrapper= styled.div`
width:100%;
background-color:burlywood;
height:max-content;
`

const ImageWrapper= styled.div`
margin-top:6%;
margin-left:40%;

`;

const ParaWrapper=styled.div`
margin-top:4%;
text-align:center;
font-family:math;
font-weight:bold;
width:50%;
margin-left:20%;
line-height:25px;
`;
const AboutMe=()=>{
    return (
         
           <Wrapper>
      <Header/>
      <ImageWrapper><img style={{width:'180px',borderRadius:'50%'}}src={ak}/></ImageWrapper>
      <ParaWrapper>
        <p style={{fontSize:'20px',color:'darkSlateGrey',fontWeight:'bolder'}}>Hi everyone. This is Aravind Krishnappa Rao, a freelance writer and to have a cup of cake in two, an equity market (NSE) advisor too.</p>
        
    <p style={{fontWeight:'500',letterSpacing:'1px'}}>Addressing the grievances shared by the common man in a Daily Newspaper (The Hindu) thereby the authorities concerned will lend their ears to know about the problem and take necessary action. In the Reader’s Mail column of The Hindu, Tamilnadu Trichy Edition, more than 250 letters got published and several grievances got resolved. Letters got published in “Vent your anger” column, Deccan Chronicle, Chennai Edition. My poem About Friendship was printed in the Annual Magazine of St.Joseph’s college, Trichy during my B.com days in 2001. With the prop & support of Amazon, published my first e-book titled “Coign of vantage”. Presently working on a book titled “ A mystic marionette” and another book on “Haikus” strictly following the syllable rule of 5-7-5.</p>
      </ParaWrapper>
           </Wrapper>
    )
}

export default AboutMe;