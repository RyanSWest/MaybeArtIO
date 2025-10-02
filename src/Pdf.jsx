 import React from 'react';
 import  White from './PDFs/Whitepaper.pdf'
 import { Document, Page } from 'react-pdf';
 import {Container,Image} from 'react-bootstrap';
 import './new.css';

 export default function PDFViewer() {
  
  

  return (
    <Container fluid  style={{display:'flex', alignContent:'center', alignItems:'center'}}>
                {/* <embed src= {White}  style = {{width:'100%',height:"700rem"}}></embed> 

               <object src ={White}  style = {{width:'100%',height:"700rem"}}
                
               
               > </object> */}

       <iframe src= {White} style ={{width:"100rem", height:"700rem", justifySelf:'center' }}></iframe>


       
        
 
     </Container>
   );
 }