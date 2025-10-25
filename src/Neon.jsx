

import {Container} from 'react-bootstrap';

import{may} from'./imgs/Maybe.jpg'

export default function MaybeNeon() {
  return (
    <Container
      className="scrollable"
      style={{
        width: "100%",
        paddingTop: "8rem",
        height: "1000vh",
        justifyContent: "center",
      }}
      fluid
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#000",
        }}
      >
        <Image className="img-fluid" src={may} />
      </div>
      </Container>) 

    }