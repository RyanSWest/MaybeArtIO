import { Connection, clusterApiUrl } from '@solana/web3.js';

console.log('1. Script started');

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
console.log('2. Connection created');

try {
  console.log('3. Getting slot...');
  const slot = await connection.getSlot();
  console.log('4. Current slot:', slot);
  console.log('SUCCESS! Network works');
} catch (err) {
  console.log('ERROR:', err.message);
}
