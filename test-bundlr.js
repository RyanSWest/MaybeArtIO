import { Connection, Keypair, clusterApiUrl } from '@solana/web3.js';
import { Metaplex, keypairIdentity, bundlrStorage } from '@metaplex-foundation/js';
import fs from 'fs';

console.log('1. Loading wallet...');
const walletPath = process.env.HOME + '/.config/solana/id.json';
const secretKey = JSON.parse(fs.readFileSync(walletPath, 'utf8'));
const wallet = Keypair.fromSecretKey(Uint8Array.from(secretKey));
console.log('2. Wallet loaded:', wallet.publicKey.toString());

console.log('3. Creating connection...');
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

console.log('4. Initializing Metaplex with Bundlr...');
const metaplex = Metaplex.make(connection)
  .use(keypairIdentity(wallet))
  .use(bundlrStorage({
    address: 'https://devnet.bundlr.network',
    providerUrl: 'https://api.devnet.solana.com',
    timeout: 60000,
  }));

console.log('5. Metaplex initialized');
console.log('SUCCESS!');
