import React, { useEffect, useState } from "react";
import "./index.css";
import { Container } from "react-bootstrap";

const Count = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("Nov 30, 2025 15:37:25").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
        backgroundImage:
          "url('https://tse3.mm.bing.net/th/id/OIP.2t27fF_lrU7G39IWuchPOAHaDd?pid=Api&P=0&h=220')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        style={{
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          border: "1px solid #ff00ff",
          borderRadius: "14px",
          padding: "2rem",
          boxShadow: "0 0 25px #ff00ff99, 0 0 10px cyan",
          fontFamily: "Rajdhani, sans-serif",
          color: "cyan",
          width: "90vw",
          maxWidth: "900px",
        }}
      >
        <h3
          style={{
                  color: "transparent", // hollow
    WebkitTextStroke: "2px white", // white outline
    textShadow: `
      0 0 4px #b400ff,
      0 0 8px #b400ff,
      0 0 16px #b400ff,
      0 0 32px #b400ff,
      0 0 48px #ff00ff,
      0 0 64px #ff00ff,
      0 0 96px #ff00ff`,
    fontFamily: "'Orbitron', sans-serif", // futuristic font
    fontSize: "clamp(1.5rem, 7vw, 5rem)", // responsive font size
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    margin: "1rem 0",
    lineHeight: "1.1",
           }}
        >
          COUNTDOWN to Auction
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.2rem",
          }}
        >
          <TimeBox label="DAYS" value={timeLeft.days} />
          <TimeBox label="HRS" value={timeLeft.hours} />
          <TimeBox label="MIN" value={timeLeft.minutes} />
          <TimeBox label="SEC" value={timeLeft.seconds} />
        </div>
      </Container>
    </div>
  );
};

const TimeBox = ({ label, value }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minWidth: "80px",
    }}
  >
    <span
      style={{
        fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
        fontWeight: "bold",
        color: "cyan",
        textShadow: "0 0 15px cyan, 0 0 5px #ff00ff",
        lineHeight: "1",
      }}
    >
      {value}
    </span>
    <span
      style={{
        fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
        color: "#ff00ff",
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginTop: "0.2rem",
      }}
    >
      {label}
    </span>
  </div>
);

export default Count;
