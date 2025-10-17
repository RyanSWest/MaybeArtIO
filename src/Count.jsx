import './index.css'
import {Container, Button} from 'react-bootstrap';
const Count = ()=> {



 var now = new Date().getTime();
  var countDownDate = new Date("Nov 30, 2025 15:37:25").getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");




    return  ( 
          <div className="countdown-container" 
          
            
         
            
            
            
            >

              
              <div style ={{backgroundColor:'black',color:'cyan'}}>
                <h1 style ={{fontSize:'large',marginRight:'.5rem', fontFamily:'Rajdhani',color:'cyan'}}>{days} :</h1>
                <h1  style ={{fontSize:'large',marginRight:'.5rem', fontFamily:'Rajdhani',color:'cyan'}}>DAYS </h1>
              </div>
              <div style ={{backgroundColor:'black'}}>
                <h1 style = {{fontSize:'large',marginRight:'.5rem', fontFamily:'Rajdhani',color:'cyan'}}>{hours} :</h1>
                <h1 style ={{fontSize:'large',marginRight:'.5rem', fontFamily:'Rajdhani',color:'cyan'}}>HRS </h1>
              </div>
              <div style ={{backgroundColor:'black'}}>
                <h1 style={{fontSize:'large',marginRight:'.5rem', fontFamily:'Rajdhani',color:'cyan'}}>{minutes}</h1>
                <h1 style= {{fontSize:'large',marginRight:'.5rem', fontFamily:'Rajdhani',color:'cyan'}}>MIN</h1>
              </div>
              <div style ={{ marginBottom: '4rem',backgroundColor:'black',color:'cyan'}}>
                <h1  style ={{fontSize:'large',marginRight:'.5rem', fontFamily:'Rajdhani',color:'cyan'}}>{seconds}</h1>
                <h1 style ={{fontSize:'large',marginRight:'.5rem', fontFamily:'Rajdhani',color:'cyan'}}>SEC</h1>
              </div>
            </div>
    )
}
export default Count