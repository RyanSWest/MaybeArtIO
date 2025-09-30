import {useState, useEffect} from 'react';
import {Container,  Card, Row , Col} from 'react-bootstrap';
import axios from 'axios';


const Gallery = ()=> {
    const[pics,setPics]=useState([])

    useEffect(() => {
    

     axios.get('http://localhost:3000/api/gallery/all')
     .then((res) => {  console.log("REXXXX",res.data)


        setPics(res.data.uploads)
      })
       

    }, [ ])


    console.log("PICS", pics)

return (

     <div className='maybeArt-landing'>
        <h1>Fuckoff</h1> 

        <div className='grid'> 
        {pics.map((e,i)=>{
            return (
                <div>
                <div className= 'image-wrapper'>
                    
                         <img src ={e.url} />
                     
               
                 </div>
                                          <span>{e.userName}</span>

                 </div>
            )
        })}


        </div>
        {/* {pics.map((e,i)=>{
            return (
                <div className= 'image-wrapper'>
                    <Row> 

                        <Col> 
                         <img src ={e.url}/>
                        </Col>
                    </Row>
               
                 </div>
            )
        })} */}




     </div>
)


}

export default Gallery