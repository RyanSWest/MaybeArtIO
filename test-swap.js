const inputMint = 'E5fqgV1UpossDXRND77XyzeJdg2Q8dkopT3poa1pHrS6'; // New token mint
const outputMint = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'; // USDC mainnet mint
const amount = 1000000; // 1 token (assuming 6 decimals, adjust if needed)
const userPublicKey = 'D6ys3Ds7e5tYyaQy8mHNBN6oX8XD1fBoBzvc592SryA3'; // Buyer address

const url = `https://quote-api.jup.ag/v6/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}&userPublicKey=${userPublicKey}`;

console.log('Testing swap from new token to USDC on MAINNET...');
console.log('URL:', url);

fetch(url)
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      console.log('❌ Swap not possible on mainnet:', data.error);
    } else {
      console.log('✅ Swap possible on mainnet!');
      console.log('Quote data:', JSON.stringify(data, null, 2));
    }
  })
  .catch(err => {
    console.error('❌ Error fetching quote:', err);
  });