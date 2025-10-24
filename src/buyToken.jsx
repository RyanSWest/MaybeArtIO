import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Container } from 'react-bootstrap';

const PAYPAL_CLIENT_ID = 'YOUR_PAYPAL_CLIENT_ID'; // Replace with your actual PayPal client ID
const API_URL = 'http://localhost:4000'; // Replace with your actual API URL

const TestPayPal = () => {
  const amount = '1.00'; // Minimal test amount
  const tokensAmount = Math.floor(parseFloat(amount) / 0.015);

  return (
    <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID, currency: 'USD' }}>
      <div style={styles.container}>
        <div style={styles.content}>
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
              try {
                const resp = await fetch(`${API_URL}/api/paypal/capture-order`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    orderId: order.id,
                    amount: parseFloat(amount),
                    tokensAmount: tokensAmount,
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
      </div>
    </PayPalScriptProvider>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#333', // Dark background color
  },
  content: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#fff', // Light background for content
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }
};

export default TestPayPal;
