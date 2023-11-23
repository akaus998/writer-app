import Header from "./Header";
import styled from 'styled-components';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import book from '../images/book.jpeg';
import cs from '../images/cs.jpg';
const Wrapper=styled.div`
width:100%;
background-color:burlywood;
height:615px;
`;
const CarouselWrapper=styled.div`
width:50%;
margin-left:25%;
margin-top:10%;
`;
const MyWork=()=>{
    return(
        <Wrapper>
            <Header/>
            <CarouselWrapper>
                <Carousel showStatus={false} autoPlay={true} infiniteLoop={true} interval={5000}showThumbs={false}>
                <div style={{display:'flex'}}> <img src={book} style={{width:'250px',height:'280px'}}/>
                <p style={{marginLeft: '2%',
    lineHeight: '30px',
    textWrap: 'balance'}}><b>Coign of vantage</b> is a conglomeration of human emotions, sketched as quotes from my memory. In the world of machines, guns, grenades, arms and ammunitions, man is totally lost somewhere. He tries to hide his face in somebody’s mask, forgetting his own authentic face and the smile behind it. The ego which is so subtle, has to be assassinated threadbare. When the human mind is intoxicated with this evil-monger ego, his whole life is depreciated to absolute zero. Several quotes decipher about this hauteur ego which is so obnoxious to one’s health.</p></div>
    <div style={{display:'flex'}}> <img src={cs} style={{width:'250px',height:'280px'}}/>
                <p style={{marginLeft: '2%',
    lineHeight: '30px',
    textWrap: 'balance'}}>Once again to disturb you all in your routine life a daredevil is going to knock your door steps in the name of <b>“A mystic marionette”</b>. Indeed it is the society which we live in gives us a bunch of experiences in everyday life, whether it is good or bad is immaterial. With deep insight it is as clear as the sky that, man and the society are not two different pillars. In fact, man and the society belong to the sides of a same coin. When you step aside of your house to buy some vegetables, at certain point of time, a quarrel crops up and you bargain with him for a surge in vegetable prices.</p></div>
               
                </Carousel>
            </CarouselWrapper>
        </Wrapper>
    )
}

export default MyWork;