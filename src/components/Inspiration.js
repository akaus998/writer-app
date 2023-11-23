import Header from "./Header";
import styled from 'styled-components';
import insp from '../images/insp.png';
import ws from '../images/ws.jpg';
import target from '../images/target.png';
import justice from '../images/justice.png';
const Wrapper= styled.div`
width:100%;
background-color:burlywood;
height:max-content;
`;

const ImageWrapper=styled.div`
margin-top:12%;
margin-left:10%;
`;
const WsImageWrapper = styled.div`
margin-left:2%;
`;

const JusticeWrapper = styled.div`
margin-left:2%;
margin-top:4%;
`;

const TargetWrapper=styled.div`
margin-left:10%;
margin-top:7%;
`;

const Inspiration = ()=>{
    return (

        <Wrapper>
        <Header/>
        <div style={{display:'flex'}}>
<ImageWrapper>
    <img src={insp} style={{width:"135px"}}/>
</ImageWrapper>
 <p style={{width:'50%',marginTop:'8%',marginLeft:'6%',letterSpacing:'2px',lineHeight:'25px'}}>From my childhood days onwards, I had a thirst to write whatever I admire the most. Whenever, I step aside out of my home, I used to carry a piece of paper and a pen. If I get attracted to something, say a rose flower, I will start sketching about the beauty of a rose flower. Since, thoughts do not stay for a longer time and would vanish away, in that worst scenario, paper and pen is the defense mechanism. It is absolutely a God’s gift. When I hold a pen in my hand and words flow automatically on its own accord, since it is the will of the God. The thirst for writing grew in gargantuan size everyday and I intensely searched for the source to quench my devilish thirst. I started posting questions in the Science & Technology column, published by The Hindu Newspaper, every week on Thursday’s, in the Know your English Q & A column, etc; To add another feather to my thirsty cap, I started posting articles on social issues in “Vent your anger” column, in the Deccan Chronicle Newspaper.</p>
 </div>
 <div style={{marginTop:'2%',display:'flex'}}>
    
    <p style={{width:'50%',marginLeft:'10%',letterSpacing:'2px',lineHeight:'25px'}}>Hitting the nail straight to one’s head, if you ask me who is your inspiration in the art of writing, I will utter without any forethought and blindly, <b>William Shakespeare</b>. Is there anyday bygone without ruminating the cud of rhetorical phrases <b>“You too brutus” , “The Daniel has come to judgement”, “Sans teeth, sans eyes, sans taste, sans everything in the seven ages of man</b>. Immersing the heart in the ocean of Shakespeare gives me immense pleasure. Secondly, it is none other than the God of Small Things author, the women of wisdom <b>Arundathi Roy</b>.</p>
    <WsImageWrapper>
        <img src={ws} style={{width:'200px'}} />
    </WsImageWrapper>
 </div>
 <div style={{marginTop:'2%',display:'flex'}}>
 <TargetWrapper>
    <img src={target} style={{width:"135px"}}/>
</TargetWrapper>
<p style={{width:'50%',marginTop:'4%',marginLeft:'6%',letterSpacing:'2px',lineHeight:'25px'}}>It is sometimes merriment, joyfulness, heart-melting circumstances, memories which invigorates me to write. On the contrary, turning on the other side of the coin, it is annoyment, anger which boils in the blood gets exposed in a paper in the form of words. A man eating biscuits and throwing the wrapper on the road, nullifying the use of dust-bin, urinating by the commonman in the public shamelessly, parents who avoid using their own or public lavatories and making their children to sit on the roadsides for open defecation etc. To the lock, stock and the barrel, the aforesaid examples are only a tip of an iceberg.</p>
 </div>
 <div style={{marginTop:'2%',display:'flex'}}>
    
    <p style={{width:'50%',marginLeft:'10%',letterSpacing:'2px',lineHeight:'25px'}}>To cut the Gordian knot, whenever I spot such a flaw, which is a deadblock in our growing society, to address the issue, I will be posting my letter in <b>Reader’s Mail Column, The Hindu Newspaper</b>. Once again, the bullet will be triggered, is it enough posting a mail to the Newspaper. Who is going to read it and what changes it will make in curbing the malice, and bringing about the renaissances and reformations in the society? I accept my defeat that such maladies do exists in our society for so many decades and it is a hard nut to crack. But like a Squirrel which helped Lord Aanjaneya to build a bridge which gave the greatest prop & support to the Lord to travel to Lanka, I had adopted this miniscule means, to put up my deliberate efforts dreaming for the renaissance, revival to happen.
Indeed, it is not once in a blue moon, it is several times, so many issues have gone to the ears of the Corporation dignitaries and they had taken necessary action against these social issues and the system got cleansed, purified without any contamination. </p>
    <JusticeWrapper>
        <img src={justice} style={{width:'160px'}} />
    </JusticeWrapper>
 </div>
            </Wrapper>
    )
};
export default Inspiration;