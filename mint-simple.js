import { Connection, Keypair, clusterApiUrl } from '@solana/web3.js';
import pkg from '@solana/spl-token';
const { createMint, TOKEN_PROGRAM_ID } = pkg;
import fs from 'fs';

console.log('🚀 Starting simple NFT mint...\n');

const walletPath = process.env.HOME + '/.config/solana/id.json';
const secretKey = JSON.parse(fs.readFileSync(walletPath, 'utf8'));
const payer = Keypair.fromSecretKey(Uint8Array.from(secretKey));

console.log('Wallet:', payer.publicKey.toString());

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

console.log('Creating mint...');
const mint = await createMint(
  connection,
  payer,
  payer.publicKey,
  payer.publicKey,
  0
);

console.log('✅ Mint created:', mint.toString());
console.log('\n🔗 View on Solscan:');
console.log(`https://solscan.io/token/${mint.toString()}?cluster=devnet`);
console.log('\n🔗 View on Explorer:');
console.log(`https://explorer.solana.com/address/${mint.toString()}?cluster=devnet`);
