 
 

import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import {Link} from 'react-router-dom';
import {file, setFile} from 'react';

 
export default function HeroCTA({
  subheading = `Connect with artists, collectors, and musicians in a vibrant space where creativity meets opportunity. Mint NFTs, sell your art, share music royalties, and access grants—all in one inspiring community. Join us to shape the future of art together.`,
  onJoin = (e) => {
    e.preventDefault();
    // default behaviour: open signup modal / navigate — currently just logs
    // Replace with real navigation/logic in your app
    console.log("Join now clicked");
    alert("Join now clicked — replace with real handler.");
  },
  
  joinHref = "/register",
  browseHref = "/grid",
}) {
  // Internal handlers that call provided props and prevent default anchor behavior
     function handleChange(e) {
        console.log(e.target.files);
        setSelectedFile(URL.createObjectURL(e.target.files[0]));
    }
  const handleBrowse = (e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    if (typeof onBrowse === "function") onBrowse(e);
  };

  return (
    <div
      id="w-node-a15aa3ad-b541-e3b1-545d-786b4da84a6f-4da84a69"
      data-w-id="d4b0a9ae-0b5e-0079-36b1-7e2693aac5d5"
      data-wf-id='["d4b0a9ae-0b5e-0079-36b1-7e2693aac5d5"]'
      className="max-width_small w-node-d4b0a9ae-0b5e-0079-36b1-7e2693aac5d5-1629d029"
    >

      <img src ={file}/>

      
   <h1>Faggy</h1>

        <input type="file" onChange={handleChange} />
            {file && <img src={ file} alt="Uploaded preview" />}
      <p
        data-w-id="d4b0a9ae-0b5e-0079-36b1-7e2693aac5cf"
        data-wf-id='["d4b0a9ae-0b5e-0079-36b1-7e2693aac5cf"]'
        className="subheading"
        data-palette="Paragraph"
      >
        {subheading}
      </p>
      <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}> 
       <Link to='/grid'> <h1 className ='cyberpunk-span-blue'>Browse Art</h1>  </Link>
      
        <Link to = '/register'
        
        >
         <p className='cyberpunk-span-blue'> Join Now</p>
        </Link>


      </div>
     

      <div
    id="w-node-a15aa3ad-b541-e3b1-545d-786b4da84a6f-4da84a69"
    className="max-width_small w-node-d4b0a9ae-0b5e-0079-36b1-7e2693aac5d5-1629d029 hero-cta"
    style={{
    backgroundImage : "url(https://tse3.mm.bing.net/th/id/OIP.2t27fF_lrU7G39IWuchPOAHaDd?pid=Api&P=0&h=220')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "20vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "4rem 2rem",
      color: "white",
      border: '2px solid cyan',
      borderRadius:'10px',
    }}
 

   >
   <img src= "https://tse3.mm.bing.net/th/id/OIP.2t27fF_lrU7G39IWuchPOAHaDd?pid=Api&P=0&h=220"/>

                                                   <p className="cyberpunk-text"> MAYBEART is a cryptocurrency on the Solana blockchain, backed by art. We empower artists and collectors through a marketplace where creators can sell their works, share royalties, and collaborate with a community that fuels innovation and growth.</p>


     
      </div>
    </div>
  );
}

// HeroCTA.propTypes = {
//   subheading: PropTypes.string,
//   onJoin: PropTypes.func,
//   onBrowse: PropTypes.func,
//   joinHref: PropTypes.string,
//   browseHref: PropTypes.string,
// };
 
 
/**
 * Example App showing how to use HeroCTA.
 * Replace onJoin and onBrowse with your real navigation/modal logic.
 
 

 

/* Minimal styles to reflect original intent.
   Replace these with your project's real styles.
*/

