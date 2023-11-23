import styled,{keyframes} from 'styled-components';
import mainBg from '../images/mainbg.jpg'
import book from '../images/book.jpeg';
import Header from './Header';
const Wrapper= styled.div`
width:100%;
font-weight:bolder;
`;
const BookImageWrapper = styled.div`
position:relative;
top:180px;
background-color:transparent;
width:100%;
`;

const MargLeft25 = styled.div`
margin-left:25%;
`;

const MargLeft5 = styled.div`
margin-left:5%;
margin-top:4%;
`;

const BookText= styled.div`
color:white;
font-family:fangsong;
font-size:25px;
background-color:orange;
border-radius:15px;
margin-top:10%;
width:38%;
`;

function blinkingEffect() {
  return keyframes`
    50% {
      opacity: 0;
    }
  `;
}

const BookImg = styled.img`
  animation: ${blinkingEffect} 2s linear 2s ;

`;
const ImageWrapper=styled.div`
position:absolute;
`
const  Home=()=> {
  return (
   <Wrapper>
   <ImageWrapper><img src={mainBg} width="100%"/></ImageWrapper>
  <Header/>
  <BookImageWrapper>
  <div style={{display:'flex'}}>
  <MargLeft25><BookImg src={book} width="200px"/></MargLeft25>
    <MargLeft5>
    <span style={{width:'40%',color:'white',fontSize:'25px',letterSpacing:'2px'}}>"THINK BEFORE YOU SPEAK.<br/><br/> READ BEFORE YOU THINK"</span><br/>
    <BookText><a target ="_blank" href="https://www.amazon.in/COIGN-VANTAGE-ARAVIND-KRISHNAPPA-RAOa-ebook/dp/B0CBCRBDHP/ref=sr_1_1?keywords=coign+of+vantage&qid=1700630718&sr=8-1" style={{padding:5,cursor:'pointer',textDecoration:'none'}}>Order Now {`>`}</a></BookText></MargLeft5>
  </div>
    
  </BookImageWrapper>
    </Wrapper>
  );
}

export default Home;
