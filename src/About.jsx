
import CFO from'./imgs/CFO.jpg'
import './imgs/Ozzie.jpg'
import MCO from './imgs/MCO.jpeg'
// import './index.css';
import './About.css';
import Header from './Header';
import Logo from './imgs/Logo.png';
import {Card, CardImg,CardImgOverlay,Image, Container}from 'react-bootstrap';
export const About = ()=>{
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Space+Mono" />

// const CFO= 'https://amethyst-peaceful-damselfly-293.mypinata.cloud/ipfs/bafkreifaojbhsgbjxxa7tgunnld2bb4pl3bqej7pathv6hdyes45it7qv4'
   
 
return (



        <div className = 'main-wrapper'> 

         {/* <Header/> */}

         <Container  style={{paddingTop:'3rem'}} > 

          
            <Card style= {{justifyContent:'center', alignItems:'center',paddingTop:'5rem'}}> 
                <Card.Title className='guy-title'>Ronald Shapiro</Card.Title>
                 <Card.Subtitle className ='guy-subtitle'>CFO Maybe-Art</Card.Subtitle>
                <Card.Body> 
<CardImg src={CFO} style={{objectFit:'cover', height:'10vh', borderRadius:'10px'}}  />

                    <Card.Text> 
                   Ronald Shapiro is a seasoned executive with a unique blend of technical expertise, financial acumen, and strategic insight. With over 20 years of experience across diverse industries, Ronald has a proven track record of navigating complex business landscapes, identifying critical challenges, and implementing
                     innovative solutions that drive growth and operational excellence.
                      A Wharton MBA and CompTIA-certified professional, 
                      Ronald brings both analytical rigor and practical
                       problem-solving skills to the leadership team at MaybeArt.
                        As CFO, he oversees financial strategy,
                         ensures robust operational frameworks,
                          and supports the company’s
                           mission to empower artists and art
                            owners through tokenization and blockchain innovation. Renowned as a skilled troubleshooter 
                            and strategic advisor, Ronald thrives in
                             dynamic environments, delivering results 
                             that align business objectives with creative
                              vision.Wayne L. "Ozzie" Rea III (737) 266-1364  


                    </Card.Text>
                </Card.Body>
 
            
            </Card>




            <Card style ={{justifyContent:'center',alignItems:'center',padding:'3rem', color:'navy'}}> 
                   <Image src={Logo}   roundedCircle

                 
                 
                 style={{maxHeight:'8rem', padding:'1rem'}}
                 />
                <Card.Header style = {{display:'flex', flexDirection:'row', padding:'1rem',        
                      justifyContent:'center', color:'navy', alignContent:'center',alignItems:'center'


                }}>   
                 
                
               
 
                                <Card.Title className='guy-title' >  Wayne Lee  "Ozzie" Rea</Card.Title>


                </Card.Header>

                 
              

                 <Card.Subtitle className='guy-subtitle'>Founder Maybe-Art</Card.Subtitle>
                <Card.Body> 
<CardImg src={MCO} 
style={{objectFit:'contain', height:'10vh', borderRadius:'30px',padding:'1rem'}} 


 />

                    <Card.Text  > 
                
               
                    Wayne “Ozzie” Rea III is an entrepreneur, blockchain strategist, and accomplished musician, blending technical expertise with creative vision. As Founder and CEO of MaybeArt, Ozzie leads a pioneering platform that empowers artists to monetize their work through tokenization, NFTs, and blockchain-based marketplaces.

A recognized performer, Ozzie is an ARIA Top 1 0 artist and has co-written a track on an album that achieved 5× platinum status, bringing firsthand music industry insight to the MaybeArt ecosystem. He also holds the distinction of being the first to tokenize an oil and gas working interest, demonstrating his ability to merge traditional industries with cutting-edge blockchain solutions.

With extensive experience in blockchain and business, including serving as Energy Blockchain Advisor for FTDAO, Ozzie has successfully launched Solana-based tokens, curated exclusive music and art collections, and built platforms that connect artists with collectors globally.

Ozzie’s work spans live music venues, digital art, and tokenized royalties, uniting his passion for creative expression with innovative technology. Known for his collaborative spirit and hands-on leadership, he ensures that MaybeArt is not just a marketplace, but a vibrant ecosystem where artists, collectors, and enthusiasts thrive together.Wayne L. "Ozzie" Rea III
(737) 266-1364
                 
                </Card.Text>
                </Card.Body>
 
            
            </Card>
         </Container>
         </div>
                       
    )
 }
 export default About