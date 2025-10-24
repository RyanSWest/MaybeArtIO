import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {Link} from 'react-router-dom'
// Optional props: amount, currency, and a callback for successful approval
const PayPalTokenPurchase = ({
  amount = "10.00",
  currency = "USD",
  onError = (err) => console.error(err),
}) => {
  const clientId = "AdEQ07n9DcpjtDpqu2W0tRyEiXxixbbZ4h9PBm_agX-BoxXBryRuK6Chjw60u5A4jEXXxJfkXJB2nAF1";

  // Backend call for sending pre-made tokens
  const handleApproveSuccess = async (details) => {
    try {
      const res = await fetch("http://localhost:4000/api/send-tokens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: details.id,
          payerId: details.payer.payer_id,
          amount: details.purchase_units[0].amount.value,
        }),
      });

      const result = await res.json();
      if (result.success) alert("Tokens sent successfully!");
      else alert("Failed to send tokens.");
    } catch (err) {
      console.error("Error sending tokens:", err);
      alert("Error sending tokens. Check console.");
    }
  };

  return (

    <>  

 
    <div style = {{justifyContent:'center',alignContent:'center'}}>   


       <Link to ='https://www.paypal.com/ncp/payment/JUUKRXQZAEF42

'>   <h1  className ='cyberpunk-text'style={{color:'blue'}}>BUY 10$ Presale!</h1> </Link>  
    </div>
    <PayPalScriptProvider
      options={{ "client-id": clientId, currency, intent: "capture" }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) =>
          actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          })
        }
        onApprove={async (data, actions) => {
          try {
            const details = await actions.order.capture();
            console.log("Payment completed:", details);
            alert(`Payment of ${details.purchase_units[0].amount.value} ${currency} completed!`);
            handleApproveSuccess(details); // call backend
          } catch (err) {
            console.error("Payment capture failed:", err);
            onError(err);
          }
        }}
        onError={(err) => {
          console.error("Payment failed:", err);
          onError(err);
          alert("Payment failed! Check console.");
        }}
      />
    </PayPalScriptProvider>
    </>
  );
};

export default PayPalTokenPurchase;
