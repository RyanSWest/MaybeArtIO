import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import {Container} from 'react-bootstrap';
const PAYPAL_CLIENT_ID = 'AVyOCn4BnD-ozN3jSqnqLmpS5pra_kO94Kmo1dyd9Wn6sKJzuFcLorsJibkK8LZmzeyU572tZFNoKWgt'
 const API_URL='http://localhost:4000'
// const API_URL = 'https://squi-d-lite-production.up.railway.app';

const TestPayPal = () => {
  const amount = '1.00';  // minimal test amount
  const tokensAmount = Math.floor(parseFloat(amount) / 0.015);

  return (
 
    <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID, currency: 'USD' }}>
      <div style={{ margin: '50px' }}>
        <h2>Test PayPal Button (Always Visible)</h2>
        <p>Amount: ${amount}</p>
        <p>Tokens: {tokensAmount}</p>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount
                  },
                  description: `${tokensAmount} tokens`
                }
              ]
            });
          }}
          onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            console.log('Order capture:', order);
            // call your backend to deliver tokens
            try {
              const resp = await fetch(`${API_URL}/api/paypal/capture-order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  orderId: order.id,
                  amount: parseFloat(amount),
                  tokensAmount: tokensAmount,
                  // you can omit wallet in this test
                })
              });
              const result = await resp.json();
              console.log('Backend result:', result);
            } catch (err) {
              console.error('Backend error:', err);
            }
          }}
          onError={(err) => {
            console.error('PayPal error:', err);
          }}
        />
      </div>
    </PayPalScriptProvider>
   
  );
};

export default TestPayPal;
