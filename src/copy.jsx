 
 

import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import {Link} from 'react-router-dom';

 
export default function HeroCTA({
  subheading = `Connect with artists, collectors, and musicians in a vibrant space where creativity meets opportunity. Mint NFTs, sell your art, share music royalties, and access grants—all in one inspiring community. Join us to shape the future of art together.`,
  onJoin = (e) => {
    e.preventDefault();
    // default behaviour: open signup modal / navigate — currently just logs
    // Replace with real navigation/logic in your app
    console.log("Join now clicked");
    alert("Join now clicked — replace with real handler.");
  },
  onBrowse = (e) => {
    e.preventDefault();
    console.log("Browse art clicked");
    alert("Browse art clicked — replace with real handler.");
  },
  joinHref = "/register",
  browseHref = "/grid",
}) {
  // Internal handlers that call provided props and prevent default anchor behavior
  const handleJoin = (e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    if (typeof onJoin === "function") onJoin(e);
  };

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
      <p
        data-w-id="d4b0a9ae-0b5e-0079-36b1-7e2693aac5cf"
        data-wf-id='["d4b0a9ae-0b5e-0079-36b1-7e2693aac5cf"]'
        className="subheading"
        data-palette="Paragraph"
      >
        {subheading}
      </p>

      <div
        data-w-id="d4b0a9ae-0b5e-0079-36b1-7e2693aac5d4"
        data-wf-id='["d4b0a9ae-0b5e-0079-36b1-7e2693aac5d4"]'
        className="button-group"
      >
        <Link to = '/register'
        
        >
         <h1 className='cyberpunk-text'> Join Now</h1>
        </Link>


<Link to='/grid'> <h1 className ='cyberpunk-text'>Browse Art</h1> Browse Art</Link>
        <a
          href= '/grid'
          data-w-id="d4b0a9ae-0b5e-0079-36b1-7e2693aac5d3"
          data-wf-id='["d4b0a9ae-0b5e-0079-36b1-7e2693aac5d3"]'
          className="button is-secondary on-inverse w-button"
          data-palette="Link"
          onClick={handleBrowse}
          aria-label="Browse art"
        >
         {"    "} Browse art
        </a>
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
 */
// export default function App() {
//   const handleJoin = (event) => {
//     event.preventDefault();
//     // Real app logic: open modal, route, or call auth flow
//     console.log("Custom join handler invoked");
//     alert("Custom join handler invoked");
//   };

//   const handleBrowse = (event) => {
//     event.preventDefault();
//     // Real app logic: navigate to gallery page
//     console.log("Custom browse handler invoked");
//     alert("Custom browse handler invoked");
//   };

//   return (
//     <div style={{ padding: 24 }}>
//       <HeroCTA onJoin={handleJoin} onBrowse={handleBrowse} />
//     </div>
//   );
// }
 
 

 

/* Minimal styles to reflect original intent.
   Replace these with your project's real styles.
*/

