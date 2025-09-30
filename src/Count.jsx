import './index.css'

const Count = ()=> {



 var now = new Date().getTime();
  var countDownDate = new Date("Oct 31, 2025 15:37:25").getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");




    return  ( 
          <div className="countdown-container">
              <div className="time">
                <h1 className="time-unit">{days} :</h1>
                <h1 className="time-unit-small">DAYS </h1>
              </div>
              <div className="time">
                <h1 className="time-unit">{hours} :</h1>
                <h1 className="time-unit-small">HRS </h1>
              </div>
              <div className="time">
                <h1 className="time-unit">{minutes}</h1>
                <h1 className="time-unit-small">MIN</h1>
              </div>
              <div className="time">
                <h1 className="time-unit">{seconds}</h1>
                <h1 className="time-unit-small">SEC</h1>
              </div>
            </div>
    )
}
export default Count