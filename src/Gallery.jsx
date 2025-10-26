import {useState, useEffect} from 'react';
import {Container,  Card, Row , Col} from 'react-bootstrap';
import axios from 'axios';


const Gallery = ()=> {
    const[pics,setPics]=useState([])
      const API_URL = 'https://squi-d-lite-production.up.railway.app'; // Update this when deployed!



      const goGetem = async()=>{

        try{
        axios.get (`${API_URL}/api/gallery/john@example.com`)
    .then((res)=> {
      console.log("REZZ", res.data)
      setPics(res.data.gallery)
    })}
    catch (err){
        console.log("ERR", err)



    }

      }

    //   goGetem()
    useEffect(() => {
    
    goGetem()

    }, [ ])


    console.log("PICS", pics)

return (

     <div className='maybeArt-landing'>
        <h1>Fuckoff</h1> 

        <div className='grid'> 
        {pics.map((e,i)=>{
            return (
                <div>
                <div className= 'image-wrapper' key={e.id}>
                    <p>{e.url}</p>
                    
                         <img src ={e.url} />
                     
               
                 </div>
                                          <span>{e.userName}</span>

                 </div>
            )
        })}
        <img src ='https://i.imgur.com/bJFGrlq.jpeg'/>

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